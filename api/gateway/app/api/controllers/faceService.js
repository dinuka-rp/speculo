const apiAdapter = require('../../utils/apiAdapter');
var FormData = require('form-data');

const BASE_URL = process.env.face_service;
const api = apiAdapter(BASE_URL);


module.exports = {

    add_face: function(req, res, next){
       
        const file = req.files;
  
        let form = new FormData();
        file.forEach(element => {
          form.append('image', element.buffer, element.originalname);
        });
      
      
        api
        .post('api'+req.path, form, {headers:{'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp=>{
          res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    update_face: function(req, res, next){

        const file = req.files;
  
        let form = new FormData();
        file.forEach(element => {
          form.append('image', element.buffer, element.originalname);
        });

        api
        .put('api'+req.path, form, {headers:{'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    get_all_faces: function(req, res, next){

        api
        .get('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    get_face_by_id: function(req, res, next){

        api
        .get('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    delete_all_faces: function(req, res, next){

        api
        .delete('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    delete_face: function(req, res, next){

        api
        .delete('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    label_face: function(req, res, next){

        api
        .patch('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    blacklist_face: function(req, res, next){

        api
        .patch('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    },

    whitelist_face: function(req, res, next){

        api
        .patch('api'+req.path).then(resp=>{
            res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    }
}