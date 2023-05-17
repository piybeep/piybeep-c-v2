import originalToast from "react-hot-toast";

export function toast (value: string) {
    originalToast(value, {
        style: {
        borderRadius: '0px',
        padding: '6px 5px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '130%',
        color: '#100F13',
        paddingLeft: '10px'
    },
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.45678 14.9565C11.575 14.9565 14.9136 11.618 14.9136 7.49975C14.9136 3.38149 11.575 0.0429688 7.45678 0.0429688C3.33852 0.0429688 0 3.38149 0 7.49975C0 11.618 3.33852 14.9565 7.45678 14.9565Z" fill="#100F13" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.4568 4.77249C7.95921 4.77249 8.36649 4.36521 8.36649 3.86281C8.36649 3.3604 7.95921 2.95312 7.4568 2.95312C6.9544 2.95312 6.54712 3.3604 6.54712 3.86281C6.54712 4.36521 6.9544 4.77249 7.4568 4.77249ZM8.30476 7.05491V6.20701H6.60896L6.60896 7.05491L6.60896 11.1395L6.60896 11.9874H8.30476V11.1395V7.05491Z" fill="#ECECEC" />
        </svg>
    })
} 