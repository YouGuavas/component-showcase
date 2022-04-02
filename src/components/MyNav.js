import '../styles/MyButton.scss';


export default function MyNav(props) {
  return (
    <button className={props.classes}>
      {props.content}
    </button>
  )
}