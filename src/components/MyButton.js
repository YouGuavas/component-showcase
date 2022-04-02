import '../styles/MyButton.scss';

export default function MyButton(props) {
  return (
    <button className={props.classes}>
      {props.content}
    </button>
  )
}