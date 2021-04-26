<?php
    namespace App\Controllers;

    use App\Models\Pessoa;
    use App\Models\Rua;
    use App\Models\Estado;
    use App\Models\Cidade;
    use App\Models\Pais;
    use App\Models\CadastroEmpresa;

    class CadastroEmpresaController
    {
        public function get($id = null) 
        {
            if ($id) {
                return CadastroEmpresa::select($id);
            } else {
                return CadastroEmpresa::selectAll();
            }
        }

        public function post() 
        {
            $data = $_POST;
            Pessoa::insert($data);

            return true; 
        }
    }