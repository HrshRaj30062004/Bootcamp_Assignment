import data from "../../../../data/data.json"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    params = await params
    const teacherId = Number(params.id)

    const filteredStudents = data.students.filter(
      (student) => student.teacherId === teacherId
    )

    return Response.json(
      {
        statusCode: 200,
        data: filteredStudents,
        message: "Students fetched successfully",
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      {
        statusCode: 500,
        data: null,
        message: "Something went wrong",
        success: false,
      },
      { status: 500 }
    )
  }
}