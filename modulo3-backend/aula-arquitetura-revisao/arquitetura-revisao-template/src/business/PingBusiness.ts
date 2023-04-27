export class PingBusiness {
  getPing = async (): Promise<string> => {
    const output = "Pong!";
    return output;
  };
}
