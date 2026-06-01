let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
let editandoId=null;

function mostrar() {
    const tbody=document.getElementById("tabla de usuarios");
    tbody.innerHTML="";

    usuarios.foreach( u => {
        <tr>
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.apellido}</td>
            <td>
                <button class="btn btn-warning" onclick="editar(${u.id})">Editar</button>
                <button class="btn btn-danger" onclick="eliminar(${u.id})">Eliminar</button>
            </td>
        </tr>
    })
}