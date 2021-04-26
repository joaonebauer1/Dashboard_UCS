<?php
    namespace App\Controllers;

    use App\Models\Atendimento;

    class AtendimentoController
    {
        public function get($idEmpresa) 
        {
            return Atendimento::select($idEmpresa);            
        }

        public function post() 
        {
            
        }

        public function update() 
        {
            
        }

        public function delete() 
        {
            
        }
    }