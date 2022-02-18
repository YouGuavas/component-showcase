import '../styles/MyButton.scss';

export default function MyButton(props) {
  return (
    <button className="my-button">
      {props.content}
    </button>
  )
}