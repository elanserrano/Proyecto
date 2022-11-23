// Cargando las variables de entorno
import configKeys from '../../config/configKeys';

// Creando los action methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Clinica Dental Shalom',
    author: 'Carlo Uriek & Elan Serrano',
  };
  // 2.Mandamos a generar la vista con el Template Engine
  res.render('home/home', viewModel);
};
// Get "/about"
const about = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/about', viewModel);
};
// get citas
const Citas = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/Citas', viewModel);
};
// get Servicios
const Servicios = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/Servicios', viewModel);
};
// get accesar
/* const Accesar = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/Accesar', viewModel);
};
// get Registro
const Registro = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/Registro', viewModel);
};
*/
// Exportando el controlador
export default { home, about, Citas, Servicios };
