function add_fields() {
    var newspan = document.createElement('span');
    newspan.innerHTML = '<div class="input-group input-group-lg"><span class="input-group-addon" id="sizing-addon1">Keyword</span><input type="text" class="form-control" placeholder="" aria-describedby="sizing-addon1"></div>';
    document.getElementById('keyword').appendChild(newspan);
}