import '../style/form.css'
const Form = () => {
  return (
    <div className="formContainer">
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <label>
          prénom :
          <input type="text" name="secondname" />
        </label>
        <label>
          Adresse Mail :
          <input type="mail" />
        </label>
        <input className="submit" type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Form
