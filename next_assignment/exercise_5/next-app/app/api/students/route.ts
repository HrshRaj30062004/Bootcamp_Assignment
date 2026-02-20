import data from "../../data/data.json"

type Student = {
  id: number
  name: string
  teacherId: number
}

type ApiResponse<> = {
  statusCode: number
  result: Student[] | null
  message: string
  success: boolean
}

export async function GET(): Promise<Response> {
  try {
    const students: Student[] = data?.students ?? []

    const response: ApiResponse = {
      statusCode: 200,
      result: students,
      message: "Data fetched successfully",
      success: true,
    }
    return Response.json(response, { status: 200 })

  } catch (error) {
    const errorResponse: ApiResponse = {
      statusCode: 500,
      result: null,
      message: "Something went wrong",
      success: false,
    }
    return Response.json(errorResponse, { status: 500 })
  }
}