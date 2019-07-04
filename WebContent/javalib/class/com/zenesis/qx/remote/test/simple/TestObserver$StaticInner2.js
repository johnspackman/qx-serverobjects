/**
 * Class generated by Qoxodoo Server Objects com.zenesis.qx.remote.ClassWriter
 * 
 */

qx.Class.define("com.zenesis.qx.remote.test.simple.TestObserver$StaticInner2", {
  "extend" : qx.core.Object,
  "construct" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    args.unshift(arguments);
    this.base.apply(this, args);
    this.initialiseProxy();
 },
  "properties" : {
    "dirty" : {
      "init" : false,
      "nullable" : false,
      "apply":"_applyDirty",
      "check":"Boolean",
      "event":"changeDirty"
    },
    "someValue" : {
      "nullable" : true,
      "apply":"_applySomeValue",
      "check":"String",
      "event":"changeSomeValue"
    }
  },
  "members" : {
    "_applySomeValue" : function(value, oldValue, name) {
    this._applyProperty("someValue", value, oldValue, name);
 },
    "_applyDirty" : function(value, oldValue, name) {
    this._applyProperty("dirty", value, oldValue, name);
 },
    "doStuff" : function() {
    return this._callServer("doStuff", qx.lang.Array.fromArguments(arguments));
 },
    "getSomeValueAsync" : function() {
    return qx.Promise.resolve(this.getSomeValue()).bind(this);
 },
    "doStuffAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("doStuff", args);
    }, this);
 },
    "getDirtyAsync" : function() {
    return qx.Promise.resolve(this.getDirty()).bind(this);
 }
  },
  "defer" : function(clazz) {
    clazz.$$eventMeta = {};
    clazz.$$methodMeta = {};
    com.zenesis.qx.remote.MProxy.deferredClassInitialisation(clazz);
    clazz.$$methodMeta.doStuff = {
      "isServer" : true
    };
    qx.lang.Object.mergeWith(clazz.$$properties.dirty, {
      "onDemand" : false,
      "isServer" : true,
      "readOnly" : false,
      "sync":"queue",
      "nativeKeyType" : true
    });
    qx.lang.Object.mergeWith(clazz.$$properties.someValue, {
      "onDemand" : false,
      "isServer" : true,
      "readOnly" : false,
      "sync":"queue",
      "nativeKeyType" : true
    });
    clazz.$$eventMeta.changeDirty = {
      "isServer" : true,
      "isProperty" : true
    };
    clazz.$$eventMeta.changeSomeValue = {
      "isServer" : true,
      "isProperty" : true
    };
 }
});