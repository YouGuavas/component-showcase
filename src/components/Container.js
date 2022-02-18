import '../styles/Container.scss';

export default function Container(props) {
  return(
    <div className="container">
      {props.component}
    </div>
  )
}