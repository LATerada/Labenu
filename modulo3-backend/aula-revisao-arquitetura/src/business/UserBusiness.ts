import { UserDatabase } from "../database/UserDatabase";
import { LoginInputDTO, LoginOutputDTO } from "../dtos/user/Login.dto";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/user/Signup.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { TokenPayload, User, USER_ROLES } from "../models/User";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManeger";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private tokenManeger: TokenManager,
    private hashManeger: HashManager
  ) {}

  public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
    const { name, email, password } = input;

    const id = this.idGenerator.generate();

    const hashedPassword = await this.hashManeger.hash(password);

    const user = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL,
      new Date().toISOString()
    );

    const userDB = user.toDBModel();
    await this.userDatabase.insertUser(userDB);

    const payload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole(),
    };

    const token = this.tokenManeger.createToken(payload);

    const output: SignupOutputDTO = {
      token,
    };

    return output;
  };

  public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {
    const { email, password } = input;

    const userDB = await this.userDatabase.findUserByEmail(email);

    if (!userDB) {
      throw new NotFoundError("email não foi cadastrado");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    );

    const hashedPassword = userDB.password;

    const isCorrectPassword = await this.hashManeger.compare(
      password,
      hashedPassword
    );

    if (!isCorrectPassword) {
      throw new BadRequestError("email ou senha incorretos");
    }

    const payload: TokenPayload = {
      id: user.getId(),
      name: user.getEmail(),
      role: user.getRole(),
    };

    const token = this.tokenManeger.createToken(payload);

    const output: LoginOutputDTO = {
      token,
    };

    return output;
  };
}
