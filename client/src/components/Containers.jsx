import React from 'react'
import AddShipp from './ListshipScreen/AddShipp.jsx'
import ListShip from './ListshipScreen/ListShip.jsx'
import CreateFornisseur from './Fornisseur/CreateFornisseur.jsx'
import ListFornisseur from './Fornisseur/ListFornisseur.jsx'
import AddUtilisateur from './Utilisateur/AddUtilisateur.jsx'
import ListUtilisateur from './Utilisateur/ListUtilisateur.jsx'

const Containers = ({ activeNavItem, setActiveNavItem }) => {
  return (
    <div className=" col-md-8 ">
      {activeNavItem === '/dashadmin/listship' && <ListShip />}
      {activeNavItem === '/dashadmin/addship' && (
        <AddShipp setActiveNavItem={setActiveNavItem} />
      )}

      {activeNavItem === '/dashadmin/listfornisseur' && <ListFornisseur />}
      {activeNavItem === '/dashadmin/addfornisseur' && (
        <CreateFornisseur setActiveNavItem={setActiveNavItem} />
      )}
      {activeNavItem === '/dashadmin/addutilisateur' && <AddUtilisateur />}
      {activeNavItem === '/dashadmin/listutilisateur' && <ListUtilisateur />}
    </div>
  )
}

export default Containers
