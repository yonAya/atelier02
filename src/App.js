import './App.css';
import { Component } from 'react';

const list_etudiants = [
  { nom: 'manar', math: 10.5, phys: 12, fr: 16 },
  { nom: 'Mohamed', math: 13, phys: 18, fr: 7 },
  { nom: 'Khalid', math: 15, phys: 15, fr: 13 },
  { nom: 'Ikbal', math: 11, phys: 9, fr: 15 },
  { nom: 'Aziz', math: 17, phys: 12, fr: 6 },
  { nom: 'Said', math: 14, phys: 7, fr: 6 },
  { nom: 'Moujahid', math: 16, phys: 17, fr: 9 },
  { nom: 'Riyad', math: 19, phys: 11, fr: 10 },
];

class Component1 extends Component {
  render() {
    return (
      <ul>
        {list_etudiants.map((etudiant) => (
          <li>
            {etudiant.nom} - Moyenne :{' '}
            {((etudiant.math + etudiant.phys + etudiant.fr) / 3).toFixed(2)}
          </li>
        ))}
      </ul>
    );
  }
}

class Component2 extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Nom</th>
          <th>Mathematique</th>
          <th>physique</th>
          <th>Français</th>
          <th>Moyenne</th>
        </tr>
        {list_etudiants.map((etudiant) => (
          <tr>
            <td>{etudiant.nom}</td>
            <td>{etudiant.math}</td>
            <td>{etudiant.phys}</td>
            <td>{etudiant.fr}</td>
            <td>
              {((etudiant.math + etudiant.phys + etudiant.fr) / 3).toFixed(2)}
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
