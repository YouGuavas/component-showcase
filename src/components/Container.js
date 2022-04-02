import '../styles/Container.scss';

export default function Container(props) {
  return(
    <div className={props.classes}>
      {props.component}
    </div>
  )
}