import data from "../../data/data.json"

type Teacher = {
  id: number
  name: string
  subject: string
}

type ApiResponse<> = {
  statusCode: number
  result: Teacher[] | null
  message: string
  success: boolean
}

export async function GET(): Promise<Response> {
  try {
    const teachers: Teacher[] = data?.teachers ?? []

    const response: ApiResponse = {
      statusCode: 200,
      result: teachers,
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



export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json()
    const { name, subject } = body

    if (!name || !subject) {
      return Response.json(
        {
          statusCode: 400,
          result: null,
          message: "Name and subject are required",
          success: false,
        },
        { status: 400 }
      )
    }

    const teachers: Teacher[] = data.teachers ?? []

    const newTeacher: Teacher = {
      id: teachers.length + 1,
      name,
      subject,
    }

    teachers.push(newTeacher)

    return Response.json(
      {
        statusCode: 201,
        result: newTeacher,
        message: "Teacher added successfully",
        success: true,
      },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      {
        statusCode: 500,
        result: null,
        message: "Something went wrong",
        success: false,
      },
      { status: 500 }
    )
  }
}