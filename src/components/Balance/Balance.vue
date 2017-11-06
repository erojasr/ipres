<template>
<div>
    <div class="text-center">
      <div class="pagination">
          <ul class="pagination">
            <li><a href="#">←</a></li>
            <li><a href="#" class="hidden-xs">PRESUPUESTO OCTUBRE 2017</a></li>
            <li class="active"><a href="#">PRESUPUESTO NOVIEMBRE 2017</a></li>
            <li><a href="#" class="hidden-xs">PRESUPUESTO DICIEMBRE 2017</a></li>
        	<li><a href="#">→</a></li>
          </ul>
      </div>
     </div>

    <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-4"><strong><span class="glyphicon glyphicon-calendar"></span>  QUINCENA 1</strong></div>
        <div class="col-md-4"><strong>TOTAL:</strong> <span class="label label-danger pull-right" style="font-size:14px;">¢500.000</span></div>
        <div class="col-md-4"><strong>SALDO:</strong> <span class="label label-success pull-right" style="font-size:14px;">¢500.000</span></div>
      </div>
      <hr>
      
      <div class="well">
        <ul class="list-group">
          <li class="list-group-item">
            
            <div class="form-group row" style="margin-bottom:5px !important;">
              <div class="col-xs-8">
                <input class="form-control" id="ex1" type="text" placeholder="Agregue Compra">
              </div>
              <div class="col-xs-4">
                <input class="form-control" id="ex2" type="text" placeholder="Monto">
              </div>
            </div>
          </li>

          <li class="list-group-item clearfix" v-for="(balance, index) in balances">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  {{ balance.article }} <span class="label label-primary" style="font-size:14px;">¢ {{ balance.amount }}</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
            <div class="row">
        <div class="col-md-4"><strong><span class="glyphicon glyphicon-calendar"></span>  QUINCENA 2</strong></div>
        <div class="col-md-4"><strong>TOTAL:</strong> <span class="label label-danger pull-right" style="font-size:14px;">¢500.000</span></div>
        <div class="col-md-4"><strong>SALDO:</strong> <span class="label label-success pull-right" style="font-size:14px;">¢500.000</span></div>
      </div>
      <hr>
      <div class="well">
         <ul class="list-group">
          <li class="list-group-item">
            
            <div class="form-group row" style="margin-bottom:5px !important;">
              <div class="col-xs-8">
                <input class="form-control" id="ex1" type="text" placeholder="Agregue Compra">
              </div>
              <div class="col-xs-4">
                <input class="form-control" id="ex2" type="text" placeholder="Monto">
              </div>
            </div>
          </li>

          <li class="list-group-item clearfix">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  Pago Credomatic <span class="label label-primary" style="font-size:14px;">¢50.000</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>

          <li class="list-group-item clearfix">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  Pago telefonos <span class="label label-primary" style="font-size:14px;">¢25.000</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>
          
          <li class="list-group-item clearfix">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  Gasolina <span class="label label-primary" style="font-size:14px;">¢104.000</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>
        </ul>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      balances : [
        {
          'article': 'Carls Junior',
          'amount': 5000,
          'date': '2017-10-05',
          'fortnight': 1,
          'done': false
        },
        {
          'article': 'Siman Ropa',
          'amount': 25000,
          'date': '2017-10-05',
          'fortnight': 1,
          'done': false
        },
        {
          'article': 'Wallmart',
          'amount': 104000,
          'date': '2017-10-05',
          'fortnight': 1,
          'done': false
        },
        {
          'article': 'Universidad',
          'amount': 175000,
          'date': '2017-10-05',
          'fortnight': 2,
          'done': false
        },
      ]
    }
  }
}
</script>

<style>
</style>
