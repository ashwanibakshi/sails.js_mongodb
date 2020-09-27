/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
     getUser:async (req,res)=>{
         try {
             console.log('sdfdsf');
            var response = await Users.find({});
            if(response){
            res.json(response);
            }
            else{
                res.json('no data fetched');
            }
         } catch (error) {
             res.json(error);
         }
        
     },
     postUser:async (req,res)=>{
         try {
            var userData  = {
                name:req.body.name
            }
            console.log(userData);
            var response = await Users.create(userData).fetch();
            if(response){
                res.json(response);
            } else{
                res.json('data not saved in db');
            }
         } catch (error) {
             res.json(error);
         }
         
     },
     editUser:async (req,res)=>{
          try {
              var response = await Users.find({name:req.params.name});
              if(response){
                  res.json(response);
              }else{
                  res.json('no data found');
              }
          } catch (error) {
              console.log(error);
          }
     },
     updateUser:async (req,res)=>{
          try {
              var userss = {
                  name:req.body.name
              }
              console.log(req.body.oldname);
              var response = await Users.updateOne({name:req.body.oldname}).set(userss);
              if(response){
                  res.json(response);
              }else{
                  res.json('not updated');
              }
          } catch (error) {
              console.log(error);
          }
     },
     deleteUser:async (req,res)=>{
         try {
             var response = await Users.destroyOne({name:req.params.name});
             if(response){
                 console.log('sdfsd',response);
                 res.json(response);
             }else{
                 res.json('not deleted ');
             }
         } catch (error) {
             console.log(error);
         }
     }
};

