export class PingBusiness {
  getPing = async (): Promise<string> => {
    const output = "Pong!";
    console.log(output);
    return output;
  };
}
