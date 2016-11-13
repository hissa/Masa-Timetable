# データベースの構成
## Tasks
|Type|FieldName|Description|NULL|Index|
|:-|:-|:-|:-|:-|
|int|id|一意なキー|false|unique|
|Date|date|タスクの日付|false||
|int|subject_id|教科id|false||
|enum|task_type|report/listen/other|true||
|int|report_number|レポートのx回目|true||
|enum|listen_type|tv/other|true||

## Subjects
|Type|FieldName|Description|Index|
|:-|:-|:-|:-|
|int|id|一意なキー|unique|
|Text|name|教科名||
|Text|name|短縮表示の教科名||
