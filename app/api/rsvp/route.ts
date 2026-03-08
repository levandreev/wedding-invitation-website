import { google } from "googleapis"
import { NextResponse } from "next/server"
import path from "path"

function getAuth() {
  return new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), "google-credentials.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
}

async function ensureHeader(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A1:E1",
  })

  if (!res.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Sheet1!A1:E1",
      valueInputOption: "RAW",
      requestBody: {
        values: [["Timestamp", "Name", "Guests", "Attending", "Comment"]],
      },
    })
  }
}

export async function POST(request: Request) {
  try {
    const { name, guests, attending, comment } = await request.json()

    if (!name || !attending) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const auth = getAuth()
    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!

    await ensureHeader(sheets, spreadsheetId)

    const timestamp = new Date().toLocaleString("cs-CZ", {
      timeZone: "Europe/Prague",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, guests, attending, comment]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("RSVP submission error:", error)
    return NextResponse.json(
      { error: "Failed to save RSVP" },
      { status: 500 }
    )
  }
}
