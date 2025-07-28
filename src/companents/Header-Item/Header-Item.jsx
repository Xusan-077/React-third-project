export default function HeaderItem(props){
    return (
        <li>
            <a href="#" className="block py-[10px] px-[25px] text-[16px] font-[600] text-[#23262D] hover:text-[#E36F59]">{props.text}</a>
        </li>
    )
}