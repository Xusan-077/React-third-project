export default function FooterItem(props){
    return (
        <li>
            <a href="#" className="text-[16px] font-[700] hover:text-[#E36F59]">
                {props.text}
            </a>
        </li>
    )
}