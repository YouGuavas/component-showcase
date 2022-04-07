import '../styles/MyForms.scss';


export default function MyForm(props) {
  return (
    <form className={props.classes}>
      <div className="form-wrapper">
        <div className="half-wrapper">
          <label className="label" for="first_name">First</label>
          <input className="input" placeholder="John" type="text" name="first_name" />
        </div>
        <div className="half-wrapper">
          <label className="label" for="last_name">Last</label>
          <input className="input" placeholder="Doe" type="text" name="last_name" />
        </div>
        <div className="full-wrapper">
            <label className="label" for="email_field_1">Email</label>
            <input className="input" type="email" name="email_field_1"/>
        </div>
      </div>


    </form>
  )
}