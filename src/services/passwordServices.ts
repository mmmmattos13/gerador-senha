export default function generatePass(){
    let password: string = '';
    let characters: string = 'Aa@#$123456789BbCcDdEe*'

    for (let i = 0; i < 8; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )   
    }

    return password
}