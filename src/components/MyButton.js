import '../styles/MyButton.scss';

export default function MyButton(props) {
  return (
    <button aria-label={props.content} className={props.classes}>
      {props.content}
    </button>
  )
}