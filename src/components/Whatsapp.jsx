import ReactPixel from "react-facebook-pixel"
const Whatsapp = () => {
  const handleClickWhatsapp = () => {
    ReactPixel.track("ClickWhatsappButton")
  }
  return (
    <div className="botton">
        <a onClick={handleClickWhatsapp && fbq('track', 'Contact')} href={`https://api.whatsapp.com/send?phone=5491138540082&text=Hola%20Flor!%20Me%20gustaría%20arrancar%20con%20el%20Italiano...`} target="blank">
            <img src="/whatsapp_logo_icon_229310.png" alt="icono de WhastsApp" />
        </a>
    </div>
  )
}

export default Whatsapp