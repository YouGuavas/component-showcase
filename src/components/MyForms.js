import '../styles/MyForms.scss';


export default function MyForm(props) {
  return (
    <form className={props.classes}>
      <div className="form-wrapper">
        <div className="half-wrapper">
          <label className="label" for="first_name">First Name</label>
          <input className="input" placeholder="John" type="text" name="first_name" />
        </div>
        <div className="half-wrapper">
          <label className="label" for="last_name">Last Name</label>
          <input className="input" placeholder="Doe" type="text" name="last_name" />
        </div>
        <div className="full-wrapper">
            <label className="label" for="email_field_1">Email</label>
            <input className="input" type="email" name="email_field_1"/>
        </div>
        <div className="full-wrapper">
          <label className="label" for="message">Message</label>
          <textarea className="input" rows="4" name="message"/>
        </div>
        <div className="full-wrapper">
          <input className="my-button" type="submit"/>
        </div>
      </div>


    </form>
  )
}