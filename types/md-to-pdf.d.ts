declare module "md-to-pdf" {
    export function mdToPdf(
      input: { content: string },
      options?: { stylesheet?: string }
    ): Promise<{ content: Buffer }>;
  }
  