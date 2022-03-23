export class CheckResponse {
    static checkResponse(res:any){
        alert(res.message)
        if(res.status)return true
        else return false
    }   
}