export default function transformPhoneNumber(phone: string) {
    if (!phone){
        return
    }
    
    let transformPhone = phone.split('')[0] === '+'
        ? [[phone.substring(0, 2), phone.substring(2, 5), phone.substring(5, 8)].join(" "), phone.substring(8, 10), phone.substring(10)].join("-")
        : [[phone.substring(0, 1), phone.substring(1, 4), phone.substring(4, 7)].join(" "), phone.substring(7, 9), phone.substring(9)].join("-")

        return phone.split('').length <= 12 ? transformPhone : phone
}
