SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '070b9590-d561-44da-9ac4-6f70695bc763', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"mulan@cool.local","user_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","user_phone":""}}', '2024-09-23 16:10:09.475558+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f3dec456-cf30-4405-9f83-c53cbd72475f', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-23 17:11:48.10443+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e78dcaee-fef0-4521-a7bd-ec2ba31c163c', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-23 17:46:48.046953+00', ''),
	('00000000-0000-0000-0000-000000000000', '126d9e2b-8a02-4c8f-85ed-3f30aa22951d', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-23 18:27:36.333216+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b3f3c9f-f0b4-418b-bc8b-6b5db5b6b545', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-23 18:31:13.843533+00', ''),
	('00000000-0000-0000-0000-000000000000', '95267c22-5283-4dca-a47b-542fdb9ccd2d', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 07:04:18.010624+00', ''),
	('00000000-0000-0000-0000-000000000000', '4373dccd-e0f7-4cc2-925d-f25c6429d273', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 07:16:13.492985+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c30f874f-817b-4245-a472-b22852a8a104', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 07:21:52.052075+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c8b341b-8a13-4566-ab55-6d69b031044c', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 07:22:23.432467+00', ''),
	('00000000-0000-0000-0000-000000000000', '4742c4ac-ea34-45bc-b8cc-786b3c524da2', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 07:23:13.703622+00', ''),
	('00000000-0000-0000-0000-000000000000', 'affcd7b7-f10c-4bcf-b7ed-991626fd1214', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 07:28:35.665006+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c01d465-490a-484d-a553-2a1c5c175e1d', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 07:58:24.511102+00', ''),
	('00000000-0000-0000-0000-000000000000', '76254828-9e18-4f05-b2a2-f130fe25e834', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 08:01:07.233491+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f845dfed-fe36-447c-943b-f47b5ec57234', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 08:14:41.498515+00', ''),
	('00000000-0000-0000-0000-000000000000', '1594f1ef-d95b-4410-9a61-781b610bb38e', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 08:15:37.107267+00', ''),
	('00000000-0000-0000-0000-000000000000', 'efc7db15-5f21-4657-920c-254518fc0edf', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 08:17:39.983203+00', ''),
	('00000000-0000-0000-0000-000000000000', '59f834ce-feba-4bc7-9075-c9f90b6e3e41', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 08:17:47.454278+00', ''),
	('00000000-0000-0000-0000-000000000000', '073618bc-3c34-4b38-8568-403544364dfc', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-24 08:59:29.377132+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e05d2a41-a0aa-495b-90f0-9e502e86f511', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-24 09:04:26.245271+00', ''),
	('00000000-0000-0000-0000-000000000000', 'df69ca8a-078f-497d-978b-88353e34560a', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-24 11:23:36.196887+00', ''),
	('00000000-0000-0000-0000-000000000000', 'afd89b69-803b-4169-8db8-20aa022407cf', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 11:23:58.396624+00', ''),
	('00000000-0000-0000-0000-000000000000', '43686e7f-c3c8-451d-b60b-7f9488256d5c', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-24 11:51:37.428578+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4bdc929-4007-4aaf-a2d0-a4dab2f2dc73', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 11:52:13.741685+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e727027-9f11-4dd6-8c34-7a80d4c79cfb', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 11:52:47.597576+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6780338-ac9c-4235-9fe6-fb23319f9d21', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 11:53:22.057977+00', ''),
	('00000000-0000-0000-0000-000000000000', '1fa475ed-6598-479e-8375-d6b102d9f5c1', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-24 11:56:15.575999+00', ''),
	('00000000-0000-0000-0000-000000000000', '1efb49cd-5522-4cc8-bcb9-34e8385d84f0', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-24 12:00:27.397265+00', ''),
	('00000000-0000-0000-0000-000000000000', '754b6d5a-81ca-4662-b06d-25a060449181', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-25 03:58:04.930078+00', ''),
	('00000000-0000-0000-0000-000000000000', '58956392-489d-47c8-ae48-6294475fabcc', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-25 03:59:43.677839+00', ''),
	('00000000-0000-0000-0000-000000000000', '5080cb4d-788c-4006-a758-034c84b53bb5', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-25 04:01:15.830612+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c347b1b0-4fbc-4b26-9624-3a7f6d3a5f68', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-25 04:07:05.258114+00', ''),
	('00000000-0000-0000-0000-000000000000', '3bf98727-55bb-4e54-918a-62eb7f7bab1b', '{"action":"user_recovery_requested","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"user"}', '2024-09-25 04:08:45.144235+00', ''),
	('00000000-0000-0000-0000-000000000000', '8a11293f-a61d-43e3-aaa5-faf7f2dfe6c7', '{"action":"login","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-25 04:09:22.73394+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e518463-b718-470a-9102-b2d7d2b4cade', '{"action":"logout","actor_id":"34fdfda5-71e1-4479-84ee-2fcd0d9bba1b","actor_username":"mulan@cool.local","actor_via_sso":false,"log_type":"account"}', '2024-09-25 04:19:02.988754+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('08080a5e-e1ae-4ad3-898b-af51fe4a8779', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', 'e2f3af27-1692-4ba8-bc8a-2116468a51cc', 's256', 'HOXBkJmUT7PY6OVO9Yo-IACpBmqDYs9vQgGgoo6sbhw', 'magiclink', '', '', '2024-09-24 08:59:29.18821+00', '2024-09-24 08:59:29.18821+00', 'magiclink', NULL),
	('2ee94812-14d1-4e71-94e2-0c196a2b56a0', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', '7fdd1122-3e2d-4396-8152-13b218981a2f', 's256', 'pcFJ-wGJtq7WSxwg4oXsH6hgoKo7G4F161dXtyH8Mo4', 'magiclink', '', '', '2024-09-24 09:04:26.203298+00', '2024-09-24 09:04:26.203298+00', 'magiclink', NULL),
	('c8d72d32-0a80-4ced-aca4-dcde2be8e31a', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', '5efe8946-d210-4aac-828d-449f77669661', 's256', 'zF4RR8WXOtBYaRLKFRDlFoK1K_8LdvGkYod7gSgAFoM', 'magiclink', '', '', '2024-09-24 11:23:36.175745+00', '2024-09-24 11:23:58.433041+00', 'magiclink', '2024-09-24 11:23:58.43258+00'),
	('14be0940-8dbb-4a94-8472-9db3ae5ff164', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', '8b195be8-4962-4128-81aa-755bfb8a39f7', 's256', 'rpS6rA86hbbYdhL7wNnjBVgN2jGsGOW9NLX-kQkwMvg', 'magiclink', '', '', '2024-09-24 11:51:37.4068+00', '2024-09-24 11:52:13.806155+00', 'magiclink', '2024-09-24 11:52:13.80609+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', 'authenticated', 'authenticated', 'mulan@cool.local', '$2a$10$yayJ9geB9SsaarBJ.CkbrO4pxXRxKT2PoN/krOqdu0jtIUbVR8ANa', '2024-09-23 16:10:09.923768+00', NULL, '', NULL, '', '2024-09-25 04:08:45.14311+00', '', '', NULL, '2024-09-25 04:09:22.741805+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-23 16:10:09.427252+00', '2024-09-25 04:09:22.789123+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b', '{"sub": "34fdfda5-71e1-4479-84ee-2fcd0d9bba1b", "email": "mulan@cool.local", "email_verified": false, "phone_verified": false}', 'email', '2024-09-23 16:10:09.46495+00', '2024-09-23 16:10:09.465241+00', '2024-09-23 16:10:09.465241+00', 'f8ec6a58-7fcc-485b-98aa-a964e13aef54');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: service_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."service_users" ("id", "created_at", "full_name", "supabase_user") VALUES
	(1, '2024-09-26 05:23:43.41614+00', 'Mulan Shinzu', '34fdfda5-71e1-4479-84ee-2fcd0d9bba1b');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2024-09-26 04:55:00.165737+00', 'Packt Publishing', 'packt.local'),
	('activenode', '2024-09-26 04:55:55.401757+00', 'Activenode Education', 'activenode.learn'),
	('oddmonkey', '2024-09-26 04:56:30.964288+00', 'OddMonkey inc', 'oddmonkey.inc');


--
-- Data for Name: tenants_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants_permissions" ("id", "created_at", "service_user", "tenant") VALUES
	(1, '2024-09-26 05:38:14.520195+00', 1, 'packt'),
	(2, '2024-09-26 05:38:33.000038+00', 1, 'oddmonkey');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 11, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: service_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."service_users_id_seq"', 1, true);


--
-- Name: tenants_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenants_permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
