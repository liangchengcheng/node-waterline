/**
 * Created by lcc on 16/2/4.
 */
var waterline=require('waterline');

var mongoAdapter=require('sails-mongo');

var config=require('./config');

var Post=require('..app/models/post.server.model');

var wlconfig={
    adapters:{
        mongo:'mongoAdapter',
        default:'mongo'
    },
    connections:{
        mongo:{
            adapter:'mongo',
            url:config.mongodb
        }
    }
};

var orm=new waterline();

orm.loadCollection(Post);

exports.wlconfig=wlconfig;
exports.orm=orm;