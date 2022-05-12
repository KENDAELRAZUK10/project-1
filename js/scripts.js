function newItem(){
    // إضافة عنصر جديد للقائمة 
  let li = $('<li></li>');
  // الحصول على قيمة حقل الادخال
  let inputValue = $('#input').val();
  // اضافة قيمة حقل الادخال إلى عنصرالقائمة 
  li.append(inputValue);
  // تنبيه المستخدم في حال عدم كتابة شيء
  if (inputValue === '') {
    
    alert("يجب عليك كتابة شيء لو تكرمت");
  } else {
    $('#list').append(li);
  }
  
  // اظهار خط منتصف العنصر عند الضغط مرتين 
  function crossOut() {
    li.toggleClass("strike");
  }
  
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });
  
// ✘ حذف العنصر عند الضغط على 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('✘'));
  li.append(crossOutButton);
  
  
  crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
       li.addClass("delete")
     }
    $('#list').sortable();
  }
  