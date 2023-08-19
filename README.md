# 스마트 도어 시스템

### 개선사항
비즈니스 로직에서 JSON 형태로 여러번 가공하기보다 RDB에서 처리할 수 없나 고민  
MySQL의 JSON_ARRATAGG(), JSON_OBJECT()를 이용하여 MySQL에서 데이터를 JSON 으로 변환함
```sql
# 기존

select * from room r
	join building b on b.id = r.building
group by b.name;
```
```sql
# 개선

select
    b.*, JSON_ARRAYAGG(
        JSON_OBJECT(
            'build', r.building,
            'room_no', r.room_no,
            'professor_name ', r.professor_name,
            'room_size', r.room_size ,
            'max_user', r.max_user
        )) as 'room'
from room r
    join building b on b.id = r.building
group by b.name;
```
