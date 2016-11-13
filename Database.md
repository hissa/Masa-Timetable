# データベースの構成
## Tasks
|Type|FieldName|Description|Index|
|:-|:-|:-|:-|
|int|id|一意なキー|unique|
|Date|date|タスクの日付|
|int|subject_id|教科id|

## Subjects
|Type|FieldName|Description|Index|
|:-|:-|:-|:-|
|int|id|一意なキー|unique|
|Text|name|教科名||
|Text|name|短縮表示の教科名||
