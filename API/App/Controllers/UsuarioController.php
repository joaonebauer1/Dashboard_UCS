<?php
    namespace App\Controllers;

    use App\Models\Usuario;

    class UsuarioController
    {
        public function get($login, $senhaHash) 
        {            
            return Usuario::select($id);            
        }        
    }