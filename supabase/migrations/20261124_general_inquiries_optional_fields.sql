-- general_inquiries: 이름/전화번호/문의내용만 필수로 변경, 상호/이메일은 선택 입력으로 변경
alter table public.general_inquiries rename column manager to name;
alter table public.general_inquiries alter column company drop not null;
alter table public.general_inquiries alter column email drop not null;
