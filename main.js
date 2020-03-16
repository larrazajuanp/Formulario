const formularioCompleto = () =>{
    const formulario = document.getElementById('formulario');
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

        const validarNombre = (e) =>{
            if(nombre.value == '' || nombre.value == null){
                console.log('Ingresa un nombre por favor!');
                error.style.display = 'block';
                error.innerHTML += '<p>Por favor, completa el campo nombre </p>'
                e.preventDefault()
            }else{
                error.style.display = 'none';
            }
            
        }

        const validarCorreo = (e) =>{
            if(correo.value == '' || correo.value == null){
                console.log('Ingresa un correo valido por favor!');
                error.style.display = 'block';
                error.innerHTML += '<p>Por favor, completa el campo email </p>'
                e.preventDefault()
            }else{
                error.style.display = 'none';
            }
            
        }

        const validarSexo = (e) =>{
            if(sexo.value == '' || sexo.value == null){
                console.log('Por favor, elegi el sexo correspondiente!');
                error.style.display = 'block';
                error.innerHTML += '<p>Por favor, elegi el sexo correspondiente</p>'
                e.preventDefault()
            }else{
                error.style.display = 'none';
            }
            
        }

        const validarTerminos = (e) =>{
            if(terminos.checked == false){
                console.log('Acepta los terminos por favor!');
                error.style.display = 'block';
                error.innerHTML += '<p>Acepta los terminos para continuar</p>'
                e.preventDefault()
            }else{
                error.style.display = 'none';
            }
            
        }



        const validarFormulario = (e) =>{
            error.innerHTML = '';

            validarNombre(e);
            validarCorreo(e);
            validarSexo(e);
            validarTerminos(e);
        }


        formulario.addEventListener('submit', validarFormulario);
}
formularioCompleto()