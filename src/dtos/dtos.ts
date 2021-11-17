export interface Test {

    testName: string
    isSuccessful: boolean
    points: number
    errorMessage: string

}

export interface Assesment{

    assessmentId:string
    exerciseId: number
    email: string
    tests:Test[]
    assessmentTime?: number
 
}