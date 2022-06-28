## Ödev Konusu
ödev data.json dosyasında bulunan json türündeki verileri kullanara bir listeleme yapmaktır.
ilk önce data.json daki aynı grupta olan üyeleri bir araya getirmek ve daha sonra da istenilen grupdaki asistanları bulmaktır.

### 1. Adım Çıktısı 
```
{
  group: 'OrangeRed',
  members: [
    {
      id: 0,
      name: 'Onur Morkoc',
      assistant: false,
      group: 'OrangeRed'
    },
    ...
    ...
  ]
}
```

### 2. Adım Çıktısı 
```
{
  groupName: 'OrangeRed',
  assistants: [ { id: 38, name: 'Derya', assistant: true, group: 'OrangeRed' } ]
}
```

# Anlatım

İlk önce aşağıdaki fonksiyonu oluşturdum. Bu fonksiyonun amacı yukarıda gördüğünüz 1. Adım Çıktısı'nı yapmaktır.
Fonksiyonda yaptığım ilk şey array veri türünde bir groupArr isimli değişken tanımlamak. Bunu tanımlamamdaki amaç birden fazla grup olduğu için daha sonradan bu grup ve üyeleri bir araya getirerek değişkenin içine atmak.
Sonra membersData isimli ve içinde data.json verileri bulunan fonksiyon parametresinin içindekilerini forEach yardımıyla tek tek döndürüyorum.
Bu işlem esnasında dönen her elemanı yani kullanıcıları gruplarına göre filtleriyerek groupMembers değişkenine tanımlıyorum.
Sonra ise groupArr içerisinde data.group var mı diye baktırıyorum yok ise geriye undefined dönecek.
En son ise eğer değer undefined ise veriyi groupArr değişkeninin içirisine atıyorum ve forEach döngüsünden çıkıp groupArr değişkenini çıktı olarak yolluyorum.

```
function editData(membersData) {

    let groupArr = []

    membersData.forEach(data => {

        let groupMembers = membersData.filter(member => member.group == data.group)
        let isMemberGroup = groupArr.find(member => member.group == data.group)

        return isMemberGroup || groupArr.push({ group: data.group, members: groupMembers })

    });

    return groupArr
}
```

---

Asistanları bulmak için yani 2. Adım Çıktısı'nı elde etmek için aşağıdaki fonksiyonu tanımladım.
Bu fonksiyondaki paremetre hangi gruptaki asistanları göstericeğinin bilgisini alıyor.
ilk önce yukarıda oluşturduğum fonksiyon yardımıyla gruplandırılmış verileri alarak bu verilerde groupName ile aynı grupta olanları groupData değişkeninin içine atıyorum. Daha sonra groupData içindeki asistanları buluyorum. En son olarak da asistanları fonksiyonda return ettirerek projeyi bitiriyorum.

```
function groupAssistants(groupName) {

    let newData = editData(data)
    let groupData = newData.find(n => n.group == groupName)
    let assistants = groupData.members.filter(g => g.assistant == true)

    return { groupName, assistants }

}
```

Artık bir grupdaki asistanları bulmak için aşağıdaki komutu yazmamız yeterlidir.

``` 
groupAssistants("OrangeRed")
```

