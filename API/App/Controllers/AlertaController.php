<?php
    namespace App\Controllers;

    use App\Models\Alerta;

    class AlertaController
    {
        public function get($id = null) 
        {
            if ($id) {
                return Alerta::select($id);
            } else {
                return Alerta::selectAll();
            }
        }

        public function post() 
        {
            $data = $_POST;

            return Alerta::insert($data);
        }

        public function update() 
        {
            
        }

        public function delete() 
        {
            
        }
    }