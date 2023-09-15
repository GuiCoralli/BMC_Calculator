## 3 maneiras de criar e atribuir função a um evento

# 1ª
form.onsubmit =  function() {}

# 2ª
form.onsubmit = () => {}

# 3ª
form.onsubmit =  handleSubmit
function handleSubmit() {}