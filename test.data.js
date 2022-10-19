export const MOCKED_DATA = {
    "meta": {
        "total": 3
    },
    "links": {
        "pages": {}
    },
    "apps": [
        {
            "id": "2ac71310-e24a-4539-8968-4451303d1677",
            "owner_uuid": "203f1314-f8a0-43fe-b272-e3a2ce4729de",
            "spec": {
                "name": "prod-client",
                "services": [
                    {
                        "name": "prod-client",
                        "image": {
                            "registry_type": "DOCR",
                            "repository": "prod-client-image",
                            "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455",
                            "deploy_on_push": {}
                        },
                        "instance_size_slug": "basic-xxs",
                        "instance_count": 1,
                        "http_port": 80,
                        "routes": [
                            {
                                "path": "/"
                            }
                        ]
                    }
                ],
                "domains": [
                    {
                        "domain": "ucademy.app",
                        "type": "PRIMARY",
                        "zone": "ucademy.app"
                    }
                ],
                "region": "fra",
                "envs": [
                    {
                        "key": "NX_API_URL",
                        "value": "https://ucademy.app",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "NX_SOCKET_URL",
                        "value": "https://ucademy.app",
                        "scope": "RUN_AND_BUILD_TIME"
                    }
                ]
            },
            "last_deployment_active_at": "2022-10-19T15:23:25Z",
            "default_ingress": "https://prod-client-8hs47.ondigitalocean.app",
            "created_at": "2022-10-19T15:17:27Z",
            "updated_at": "2022-10-19T15:23:27Z",
            "active_deployment": {
                "id": "24136c53-c9a7-4412-ae01-2c6d03121b3e",
                "spec": {
                    "name": "prod-client",
                    "services": [
                        {
                            "name": "prod-client",
                            "image": {
                                "registry_type": "DOCR",
                                "repository": "prod-client-image",
                                "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455",
                                "deploy_on_push": {}
                            },
                            "instance_size_slug": "basic-xxs",
                            "instance_count": 1,
                            "http_port": 80,
                            "routes": [
                                {
                                    "path": "/"
                                }
                            ]
                        }
                    ],
                    "domains": [
                        {
                            "domain": "ucademy.app",
                            "type": "PRIMARY",
                            "zone": "ucademy.app"
                        }
                    ],
                    "region": "fra",
                    "envs": [
                        {
                            "key": "NX_API_URL",
                            "value": "https://ucademy.app",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "NX_SOCKET_URL",
                            "value": "https://ucademy.app",
                            "scope": "RUN_AND_BUILD_TIME"
                        }
                    ]
                },
                "services": [
                    {
                        "name": "prod-client",
                        "source_image_digest": "sha256:12bdef5a10da9023990aca0e64d8eaf3d4dc18caab1a443dc2636dd571b18a62"
                    }
                ],
                "phase_last_updated_at": "2022-10-19T15:23:25Z",
                "created_at": "2022-10-19T15:23:17Z",
                "updated_at": "2022-10-19T15:23:25Z",
                "cause": "domain ucademy.app ready",
                "progress": {
                    "success_steps": 6,
                    "total_steps": 6,
                    "steps": [
                        {
                            "name": "build",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:23:18.860413596Z",
                                    "ended_at": "2022-10-19T15:23:18.923311220Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-client",
                                            "status": "SUCCESS",
                                            "reason": {
                                                "code": "PreBuiltImage",
                                                "message": "Your build job was skipped because you specified a pre-built image."
                                            },
                                            "component_name": "prod-client",
                                            "message_base": "Building service"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:23:18.923338587Z",
                                    "ended_at": "2022-10-19T15:23:18.923676981Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:23:18.860366109Z",
                            "ended_at": "2022-10-19T15:23:18.923859772Z"
                        },
                        {
                            "name": "deploy",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:23:20.947935813Z",
                                    "ended_at": "2022-10-19T15:23:22.369994520Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-client",
                                            "status": "SUCCESS",
                                            "steps": [
                                                {
                                                    "name": "deploy",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-client",
                                                    "message_base": "Deploying service"
                                                },
                                                {
                                                    "name": "wait",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-client",
                                                    "message_base": "Waiting for service"
                                                }
                                            ],
                                            "component_name": "prod-client"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:23:22.370028095Z",
                                    "ended_at": "2022-10-19T15:23:23.385781151Z"
                                },
                                {
                                    "name": "finalize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:23:23.860904718Z",
                                    "ended_at": "2022-10-19T15:23:24.670280704Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:23:20.947906831Z",
                            "ended_at": "2022-10-19T15:23:24.670424885Z"
                        }
                    ]
                },
                "phase": "ACTIVE",
                "tier_slug": "basic",
                "previous_deployment_id": "ed24199e-07ac-43c3-a3fe-cbad1def6e55",
                "cause_details": {
                    "internal": true,
                    "type": "MAINTENANCE"
                },
                "timing": {
                    "pending": "1.860413596s",
                    "build_total": "0.063446176s",
                    "build_billable": "0s"
                }
            },
            "last_deployment_created_at": "2022-10-19T15:23:17Z",
            "live_url": "https://ucademy.app",
            "region": {
                "slug": "fra",
                "label": "Frankfurt",
                "flag": "germany",
                "continent": "Europe",
                "data_centers": [
                    "fra1"
                ]
            },
            "tier_slug": "basic",
            "live_url_base": "https://ucademy.app",
            "live_domain": "ucademy.app",
            "build_config": {}
        },
        {
            "id": "c2bf0ee4-98fb-41aa-9fbb-354c61a96acd",
            "owner_uuid": "203f1314-f8a0-43fe-b272-e3a2ce4729de",
            "spec": {
                "name": "prod-api",
                "services": [
                    {
                        "name": "prod-api",
                        "image": {
                            "registry_type": "DOCR",
                            "repository": "prod-api-image",
                            "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455",
                            "deploy_on_push": {}
                        },
                        "instance_size_slug": "basic-xxs",
                        "instance_count": 1,
                        "http_port": 3333,
                        "routes": [
                            {
                                "path": "/"
                            }
                        ],
                        "health_check": {
                            "http_path": "/api"
                        }
                    }
                ],
                "domains": [
                    {
                        "domain": "api.ucademy.app",
                        "type": "PRIMARY",
                        "zone": "ucademy.app"
                    }
                ],
                "region": "fra",
                "envs": [
                    {
                        "key": "DB_URI",
                        "value": "mongodb+srv://root:24n9Qc6Mx7y3k5H0@ucademy-db-b0475def.mongo.ondigitalocean.com/db-dev?tls=true&authSource=admin&replicaSet=ucademy-db",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "S3_BUCKET",
                        "value": "ucademy.storage",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "S3_ACCESS_KEY",
                        "value": "DO00PWUUL4PBP68XZXAD",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "S3_SECRET_KEY",
                        "value": "6SvnELU4vW2N1Zov9NOwLpjxSIKF/172gtpGzvW9bh8",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "EMAIL_USER",
                        "value": "info@ucademy.com",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "EMAIL_PASSWORD",
                        "value": ".Ucademy2022$$.",
                        "scope": "RUN_AND_BUILD_TIME"
                    },
                    {
                        "key": "PUBLIC_HOST",
                        "value": "https://ucademy.app",
                        "scope": "RUN_AND_BUILD_TIME"
                    }
                ]
            },
            "last_deployment_active_at": "2022-10-19T15:26:55Z",
            "default_ingress": "https://prod-api-udonb.ondigitalocean.app",
            "created_at": "2022-10-19T15:14:40Z",
            "updated_at": "2022-10-19T15:26:59Z",
            "active_deployment": {
                "id": "4fd6fb59-f822-46d5-b427-0abe5c6d36a1",
                "spec": {
                    "name": "prod-api",
                    "services": [
                        {
                            "name": "prod-api",
                            "image": {
                                "registry_type": "DOCR",
                                "repository": "prod-api-image",
                                "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455",
                                "deploy_on_push": {}
                            },
                            "instance_size_slug": "basic-xxs",
                            "instance_count": 1,
                            "http_port": 3333,
                            "routes": [
                                {
                                    "path": "/"
                                }
                            ],
                            "health_check": {
                                "http_path": "/api"
                            }
                        }
                    ],
                    "domains": [
                        {
                            "domain": "api.ucademy.app",
                            "type": "PRIMARY",
                            "zone": "ucademy.app"
                        }
                    ],
                    "region": "fra",
                    "envs": [
                        {
                            "key": "DB_URI",
                            "value": "mongodb+srv://root:24n9Qc6Mx7y3k5H0@ucademy-db-b0475def.mongo.ondigitalocean.com/db-dev?tls=true&authSource=admin&replicaSet=ucademy-db",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "S3_BUCKET",
                            "value": "ucademy.storage",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "S3_ACCESS_KEY",
                            "value": "DO00PWUUL4PBP68XZXAD",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "S3_SECRET_KEY",
                            "value": "6SvnELU4vW2N1Zov9NOwLpjxSIKF/172gtpGzvW9bh8",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "EMAIL_USER",
                            "value": "info@ucademy.com",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "EMAIL_PASSWORD",
                            "value": ".Ucademy2022$$.",
                            "scope": "RUN_AND_BUILD_TIME"
                        },
                        {
                            "key": "PUBLIC_HOST",
                            "value": "https://ucademy.app",
                            "scope": "RUN_AND_BUILD_TIME"
                        }
                    ]
                },
                "services": [
                    {
                        "name": "prod-api",
                        "source_image_digest": "sha256:16be3ea875fb39193e60aa90cf72d45bef043d7bd58f6dc3b5696785c3d823c1"
                    }
                ],
                "phase_last_updated_at": "2022-10-19T15:26:55Z",
                "created_at": "2022-10-19T15:26:47Z",
                "updated_at": "2022-10-19T15:26:55Z",
                "cause": "domain api.ucademy.app ready",
                "progress": {
                    "success_steps": 6,
                    "total_steps": 6,
                    "steps": [
                        {
                            "name": "build",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:26:48.724577887Z",
                                    "ended_at": "2022-10-19T15:26:48.795720165Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-api",
                                            "status": "SUCCESS",
                                            "reason": {
                                                "code": "PreBuiltImage",
                                                "message": "Your build job was skipped because you specified a pre-built image."
                                            },
                                            "component_name": "prod-api",
                                            "message_base": "Building service"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:26:48.795745469Z",
                                    "ended_at": "2022-10-19T15:26:48.796115528Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:26:48.724550916Z",
                            "ended_at": "2022-10-19T15:26:48.796418786Z"
                        },
                        {
                            "name": "deploy",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:26:50.725322562Z",
                                    "ended_at": "2022-10-19T15:26:52.157740446Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-api",
                                            "status": "SUCCESS",
                                            "steps": [
                                                {
                                                    "name": "deploy",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-api",
                                                    "message_base": "Deploying service"
                                                },
                                                {
                                                    "name": "wait",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-api",
                                                    "message_base": "Waiting for service"
                                                }
                                            ],
                                            "component_name": "prod-api"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:26:52.157769495Z",
                                    "ended_at": "2022-10-19T15:26:53.207398617Z"
                                },
                                {
                                    "name": "finalize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:26:53.691573117Z",
                                    "ended_at": "2022-10-19T15:26:55.214228134Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:26:50.725296865Z",
                            "ended_at": "2022-10-19T15:26:55.214428245Z"
                        }
                    ]
                },
                "phase": "ACTIVE",
                "tier_slug": "basic",
                "previous_deployment_id": "bfbbc2cb-d694-4c1a-ac53-688db1c2efc1",
                "cause_details": {
                    "internal": true,
                    "type": "MAINTENANCE"
                },
                "timing": {
                    "pending": "1.724577887s",
                    "build_total": "0.071840899s",
                    "build_billable": "0s"
                }
            },
            "last_deployment_created_at": "2022-10-19T15:26:47Z",
            "live_url": "https://api.ucademy.app",
            "region": {
                "slug": "fra",
                "label": "Frankfurt",
                "flag": "germany",
                "continent": "Europe",
                "data_centers": [
                    "fra1"
                ]
            },
            "tier_slug": "basic",
            "live_url_base": "https://api.ucademy.app",
            "live_domain": "api.ucademy.app",
            "build_config": {}
        },
        {
            "id": "480b83dc-0092-4ef6-84ce-d2a055ba4bf8",
            "owner_uuid": "203f1314-f8a0-43fe-b272-e3a2ce4729de",
            "spec": {
                "name": "prod-app",
                "services": [
                    {
                        "name": "prod-client-image",
                        "image": {
                            "registry_type": "DOCR",
                            "repository": "prod-client-image",
                            "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455"
                        },
                        "envs": [
                            {
                                "key": "NX_API_URL",
                                "value": "https://ucademy.app",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "NX_SOCKET_URL",
                                "value": "https://ucademy.app",
                                "scope": "RUN_AND_BUILD_TIME"
                            }
                        ],
                        "instance_size_slug": "basic-xxs",
                        "instance_count": 1,
                        "http_port": 80,
                        "routes": [
                            {
                                "path": "/"
                            }
                        ],
                        "health_check": {
                            "http_path": "/"
                        },
                        "log_destinations": [
                            {
                                "name": "Prod Client Logs",
                                "logtail": {
                                    "token": "fdYQpb6HvCZ5un51LQKagCD2"
                                }
                            }
                        ]
                    },
                    {
                        "name": "prod-api-image",
                        "image": {
                            "registry_type": "DOCR",
                            "repository": "prod-api-image",
                            "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455"
                        },
                        "envs": [
                            {
                                "key": "DB_URI",
                                "value": "mongodb+srv://root:24n9Qc6Mx7y3k5H0@ucademy-db-b0475def.mongo.ondigitalocean.com/db-dev?tls=true&authSource=admin&replicaSet=ucademy-db",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "S3_BUCKET",
                                "value": "ucademy.storage",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "S3_ACCESS_KEY",
                                "value": "DO00PWUUL4PBP68XZXAD",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "S3_SECRET_KEY",
                                "value": "6SvnELU4vW2N1Zov9NOwLpjxSIKF/172gtpGzvW9bh8",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "EMAIL_USER",
                                "value": "info@ucademy.com",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "EMAIL_PASSWORD",
                                "value": ".Ucademy2022$$.",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "PUBLIC_HOST",
                                "value": "https://ucademy.app",
                                "scope": "RUN_AND_BUILD_TIME"
                            },
                            {
                                "key": "SOCKET_PORT",
                                "value": "80",
                                "scope": "RUN_AND_BUILD_TIME"
                            }
                        ],
                        "instance_size_slug": "basic-xxs",
                        "instance_count": 1,
                        "http_port": 3333,
                        "routes": [
                            {
                                "path": "/api"
                            },
                            {
                                "path": "/socket"
                            }
                        ],
                        "log_destinations": [
                            {
                                "name": "Prod API Logs",
                                "logtail": {
                                    "token": "xatRKeZc9Z1uuSrCg7ux8YGF"
                                }
                            }
                        ]
                    }
                ],
                "region": "fra",
                "envs": [
                    {
                        "key": "NODE_ENV",
                        "value": "production",
                        "scope": "RUN_AND_BUILD_TIME"
                    }
                ],
                "alerts": [
                    {
                        "rule": "DEPLOYMENT_FAILED"
                    },
                    {
                        "rule": "DEPLOYMENT_LIVE"
                    }
                ]
            },
            "last_deployment_active_at": "2022-10-19T15:21:39Z",
            "default_ingress": "https://prod-app-h4koo.ondigitalocean.app",
            "created_at": "2022-08-16T00:08:15Z",
            "updated_at": "2022-10-19T15:21:43Z",
            "active_deployment": {
                "id": "0600b4fb-884f-41f1-8583-7907e584446a",
                "spec": {
                    "name": "prod-app",
                    "services": [
                        {
                            "name": "prod-client-image",
                            "image": {
                                "registry_type": "DOCR",
                                "repository": "prod-client-image",
                                "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455"
                            },
                            "envs": [
                                {
                                    "key": "NX_API_URL",
                                    "value": "https://ucademy.app",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "NX_SOCKET_URL",
                                    "value": "https://ucademy.app",
                                    "scope": "RUN_AND_BUILD_TIME"
                                }
                            ],
                            "instance_size_slug": "basic-xxs",
                            "instance_count": 1,
                            "http_port": 80,
                            "routes": [
                                {
                                    "path": "/"
                                }
                            ],
                            "health_check": {
                                "http_path": "/"
                            },
                            "log_destinations": [
                                {
                                    "name": "Prod Client Logs",
                                    "logtail": {
                                        "token": "fdYQpb6HvCZ5un51LQKagCD2"
                                    }
                                }
                            ]
                        },
                        {
                            "name": "prod-api-image",
                            "image": {
                                "registry_type": "DOCR",
                                "repository": "prod-api-image",
                                "tag": "8b0964ec90f4e986a9cf08b8f03426325f26c455"
                            },
                            "envs": [
                                {
                                    "key": "DB_URI",
                                    "value": "mongodb+srv://root:24n9Qc6Mx7y3k5H0@ucademy-db-b0475def.mongo.ondigitalocean.com/db-dev?tls=true&authSource=admin&replicaSet=ucademy-db",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "S3_BUCKET",
                                    "value": "ucademy.storage",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "S3_ACCESS_KEY",
                                    "value": "DO00PWUUL4PBP68XZXAD",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "S3_SECRET_KEY",
                                    "value": "6SvnELU4vW2N1Zov9NOwLpjxSIKF/172gtpGzvW9bh8",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "EMAIL_USER",
                                    "value": "info@ucademy.com",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "EMAIL_PASSWORD",
                                    "value": ".Ucademy2022$$.",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "PUBLIC_HOST",
                                    "value": "https://ucademy.app",
                                    "scope": "RUN_AND_BUILD_TIME"
                                },
                                {
                                    "key": "SOCKET_PORT",
                                    "value": "80",
                                    "scope": "RUN_AND_BUILD_TIME"
                                }
                            ],
                            "instance_size_slug": "basic-xxs",
                            "instance_count": 1,
                            "http_port": 3333,
                            "routes": [
                                {
                                    "path": "/api"
                                },
                                {
                                    "path": "/socket"
                                }
                            ],
                            "log_destinations": [
                                {
                                    "name": "Prod API Logs",
                                    "logtail": {
                                        "token": "xatRKeZc9Z1uuSrCg7ux8YGF"
                                    }
                                }
                            ]
                        }
                    ],
                    "region": "fra",
                    "envs": [
                        {
                            "key": "NODE_ENV",
                            "value": "production",
                            "scope": "RUN_AND_BUILD_TIME"
                        }
                    ],
                    "alerts": [
                        {
                            "rule": "DEPLOYMENT_FAILED"
                        },
                        {
                            "rule": "DEPLOYMENT_LIVE"
                        }
                    ]
                },
                "services": [
                    {
                        "name": "prod-client-image",
                        "source_image_digest": "sha256:12bdef5a10da9023990aca0e64d8eaf3d4dc18caab1a443dc2636dd571b18a62"
                    },
                    {
                        "name": "prod-api-image",
                        "source_image_digest": "sha256:16be3ea875fb39193e60aa90cf72d45bef043d7bd58f6dc3b5696785c3d823c1"
                    }
                ],
                "phase_last_updated_at": "2022-10-19T15:21:39Z",
                "created_at": "2022-10-19T15:21:28Z",
                "updated_at": "2022-10-19T15:21:39Z",
                "cause": "app spec updated",
                "progress": {
                    "success_steps": 9,
                    "total_steps": 9,
                    "steps": [
                        {
                            "name": "build",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:21:30.770052392Z",
                                    "ended_at": "2022-10-19T15:21:30.804356663Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-client-image",
                                            "status": "SUCCESS",
                                            "reason": {
                                                "code": "PreBuiltImage",
                                                "message": "Your build job was skipped because you specified a pre-built image."
                                            },
                                            "component_name": "prod-client-image",
                                            "message_base": "Building service"
                                        },
                                        {
                                            "name": "prod-api-image",
                                            "status": "SUCCESS",
                                            "reason": {
                                                "code": "PreBuiltImage",
                                                "message": "Your build job was skipped because you specified a pre-built image."
                                            },
                                            "component_name": "prod-api-image",
                                            "message_base": "Building service"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:21:30.804419323Z",
                                    "ended_at": "2022-10-19T15:21:30.805060107Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:21:30.770033397Z",
                            "ended_at": "2022-10-19T15:21:30.805325053Z"
                        },
                        {
                            "name": "deploy",
                            "status": "SUCCESS",
                            "steps": [
                                {
                                    "name": "initialize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:21:32.994766136Z",
                                    "ended_at": "2022-10-19T15:21:34.827786346Z"
                                },
                                {
                                    "name": "components",
                                    "status": "SUCCESS",
                                    "steps": [
                                        {
                                            "name": "prod-client-image",
                                            "status": "SUCCESS",
                                            "steps": [
                                                {
                                                    "name": "deploy",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-client-image",
                                                    "message_base": "Deploying service"
                                                },
                                                {
                                                    "name": "wait",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-client-image",
                                                    "message_base": "Waiting for service"
                                                }
                                            ],
                                            "component_name": "prod-client-image"
                                        },
                                        {
                                            "name": "prod-api-image",
                                            "status": "SUCCESS",
                                            "steps": [
                                                {
                                                    "name": "deploy",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-api-image",
                                                    "message_base": "Deploying service"
                                                },
                                                {
                                                    "name": "wait",
                                                    "status": "SUCCESS",
                                                    "component_name": "prod-api-image",
                                                    "message_base": "Waiting for service"
                                                }
                                            ],
                                            "component_name": "prod-api-image"
                                        }
                                    ],
                                    "started_at": "2022-10-19T15:21:34.827828195Z",
                                    "ended_at": "2022-10-19T15:21:37.364114626Z"
                                },
                                {
                                    "name": "finalize",
                                    "status": "SUCCESS",
                                    "started_at": "2022-10-19T15:21:37.875995765Z",
                                    "ended_at": "2022-10-19T15:21:38.853174348Z"
                                }
                            ],
                            "started_at": "2022-10-19T15:21:32.994737310Z",
                            "ended_at": "2022-10-19T15:21:39.195250526Z"
                        }
                    ]
                },
                "phase": "ACTIVE",
                "tier_slug": "basic",
                "previous_deployment_id": "d9a4b042-a32c-42b4-8e89-a4f2248dac8f",
                "cause_details": {
                    "digitalocean_user_action": {
                        "user": {
                            "uuid": "d4774265-48e1-4196-8558-67e916d1d198",
                            "email": "tech@ucademy.es",
                            "full_name": "Jeffrey Viveros Angola"
                        },
                        "name": "UPDATE_SPEC"
                    },
                    "type": "MANUAL"
                },
                "timing": {
                    "pending": "2.770052392s",
                    "build_total": "0.035272661s",
                    "build_billable": "0s"
                }
            },
            "last_deployment_created_at": "2022-10-19T15:21:28Z",
            "live_url": "https://prod-app-h4koo.ondigitalocean.app",
            "region": {
                "slug": "fra",
                "label": "Frankfurt",
                "flag": "germany",
                "continent": "Europe",
                "data_centers": [
                    "fra1"
                ]
            },
            "tier_slug": "basic",
            "live_url_base": "https://prod-app-h4koo.ondigitalocean.app",
            "live_domain": "prod-app-h4koo.ondigitalocean.app",
            "build_config": {
                "cnb_versioning": {
                    "buildpacks": [
                        {
                            "id": "digitalocean/custom",
                            "latest": true,
                            "name": "Custom Build Command",
                            "description": [
                                "Run the provided custom build command"
                            ],
                            "docs_link": "https://docs.digitalocean.com/products/app-platform/concepts/command/"
                        },
                        {
                            "id": "digitalocean/node",
                            "latest": true,
                            "name": "Node.js",
                            "description": [
                                "Install dependencies using NPM or Yarn"
                            ],
                            "docs_link": "https://docs.digitalocean.com/products/app-platform/languages-frameworks/nodejs/"
                        },
                        {
                            "id": "digitalocean/procfile",
                            "latest": true,
                            "name": "Procfile",
                            "description": [
                                "Configure default run commands from the Procfile if one exists"
                            ]
                        }
                    ]
                }
            }
        }
    ]
}