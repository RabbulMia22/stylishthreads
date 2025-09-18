declare module "imagekit" {
  interface ImageKitOptions {
    publicKey: string;
    privateKey: string;
    urlEndpoint: string;
  }

  export default class ImageKit {
    constructor(options: ImageKitOptions);

    getAuthenticationParameters(): {
      token: string;
      expire: number;
      signature: string;
    };

    upload(options: {
      file: string | Buffer;
      fileName: string;
      folder?: string;
    }): Promise<any>;
  }
}
