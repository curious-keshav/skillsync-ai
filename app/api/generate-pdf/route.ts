/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { mdToPdf } from "md-to-pdf";

export const config = {
  runtime: "nodejs",
};

export async function POST(req: NextRequest) {
  try {
    console.log("📌 Received request at /api/generate-pdf");

    const requestBody = await req.json();
    console.log("📌 Received Markdown content:", requestBody);

    if (!requestBody.content) {
      throw new Error("Missing 'content' field in request body.");
    }

    // Generate PDF
    const pdfResult = await mdToPdf(
      { content: requestBody.content },
      { stylesheet: "" }
    );

    if (!pdfResult.content) {
      throw new Error("PDF generation failed: No content returned.");
    }

    console.log("✅ PDF generated successfully");

    return new NextResponse(pdfResult.content, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error: any) {
    console.error("🚨 PDF Generation Error:", error.message);

    return NextResponse.json(
      { message: "Failed to generate PDF", error: error.message },
      { status: 500 }
    );
  }
}
