/* eslint-disable @typescript-eslint/camelcase */
import {createMemoryHistory} from "history";

const history = createMemoryHistory({ initialEntries: ["/transactions"]});

export const routeProps = {
    history,
    location: {
        "pathname": "/transactions",
        "search": "",
        "hash": "",
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        "state": null,
    },
    "match": {
        "path": "/transactions",
        "url": "/transactions",
        "isExact": true,
        "params": {},
    },
}

export const data = {
    "statements": [{
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "557",
            "first_attempt_count": "557",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002615184919210055, "squared_diffs": 0.28076569372595306},
            "run_lat": {"mean": 0.026397836624775597, "squared_diffs": 53.447023474370134},
            "service_lat": {"mean": -9223372036.825768, "squared_diffs": 61.00942964330534},
            "overhead_lat": {"mean": -9223372036.854765, "squared_diffs": 1.841144694481045e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 111613000}
            },
            "bytes_read": {"mean": 61.021543985637344, "squared_diffs": 47.74147217235174},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0009092285714285716, "squared_diffs": 0.00011917436234285714},
            "run_lat": {"mean": 0.06882445714285716, "squared_diffs": 20.155833230423376},
            "service_lat": {"mean": -9223372036.785038, "squared_diffs": 20.17413523535288},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 6.039044819772243e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670162", "nanos": 750239000}
            },
            "bytes_read": {"mean": 61.11428571428572, "squared_diffs": 31.085714285714225},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.008484, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010116, "squared_diffs": 0},
            "run_lat": {"mean": 0.008816, "squared_diffs": 0},
            "service_lat": {"mean": 0.027419, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 295410000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008967746428571436, "squared_diffs": 0.6313926630769965},
            "run_lat": {"mean": 0.023127346428571432, "squared_diffs": 24.480558092911405},
            "service_lat": {"mean": -9223372036.82268, "squared_diffs": 32.03454110201346},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 2.750311978161335e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 111319000}
            },
            "bytes_read": {"mean": 10621.267857142862, "squared_diffs": 470702848.9107132},
            "rows_read": {"mean": 15.789285714285711, "squared_diffs": 652.5678571428576}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012858, "squared_diffs": 0},
            "run_lat": {"mean": 0.011222, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.830692, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 292763000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000453, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000099, "squared_diffs": 0},
            "run_lat": {"mean": 0.066172, "squared_diffs": 0},
            "service_lat": {"mean": 0.066726, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002000000000002, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 343125000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.018638, "squared_diffs": 0},
            "run_lat": {"mean": 0.008555, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.82758, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 342990000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "141",
            "first_attempt_count": "141",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.003381439716312056, "squared_diffs": 0.08767511878473759},
            "run_lat": {"mean": 0.018693638297872336, "squared_diffs": 1.045614239546554},
            "service_lat": {"mean": -9223372036.832695, "squared_diffs": 1.5448581299024227},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 6.837217370048165e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670345", "nanos": 756723000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.032205, "squared_diffs": 0},
            "run_lat": {"mean": 0.001689, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.820879, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 330423000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0010775, "squared_diffs": 0.000022485897999999995},
            "plan_lat": {"mean": 0.029394708333333335, "squared_diffs": 0.1030786466649583},
            "run_lat": {"mean": 0.005224291666666666, "squared_diffs": 0.0025294570249583337},
            "service_lat": {"mean": 0.035700833333333334, "squared_diffs": 0.13060311153333334},
            "overhead_lat": {"mean": 0.000004333333333333095, "squared_diffs": 1.3933333333305632e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 152349000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0009234222222222222, "squared_diffs": 0.0006334197669777778},
            "plan_lat": {"mean": 0.026774133333333335, "squared_diffs": 0.22170199571520002},
            "run_lat": {"mean": 0.0028788, "squared_diffs": 0.0005791939152},
            "service_lat": {"mean": 0.030581799999999996, "squared_diffs": 0.25903384009319996},
            "overhead_lat": {"mean": 0.000005444444444442968, "squared_diffs": 3.2511111111089685e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 343633000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010541992857142855, "squared_diffs": 2.146533758611986},
            "run_lat": {"mean": 0.0031176821428571433, "squared_diffs": 0.06556231574271072},
            "service_lat": {"mean": -9223372036.841112, "squared_diffs": 2.87636379147807},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 7.09405867382884e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 125025000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02348341935483871, "squared_diffs": 2.9085204916386456},
            "run_lat": {"mean": 0.01870748387096774, "squared_diffs": 1.9797598603672257},
            "service_lat": {"mean": -9223372036.812582, "squared_diffs": 9.677654038267065},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 2.0543666323646903e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670319", "nanos": 916463000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03574180645161291, "squared_diffs": 5.3250839150125175},
            "run_lat": {"mean": 0.01681697849462365, "squared_diffs": 1.0178138891739568},
            "service_lat": {"mean": -9223372036.802214, "squared_diffs": 10.971586744126398},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 6.148184183984995e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670319", "nanos": 903222000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 5
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0008134888888888888, "squared_diffs": 0.00002819043324444445},
            "plan_lat": {"mean": 0.08987273333333334, "squared_diffs": 4.553913864058798},
            "run_lat": {"mean": 0.005617644444444445, "squared_diffs": 0.009825823042311107},
            "service_lat": {"mean": 0.09630884444444449, "squared_diffs": 4.963404567377911},
            "overhead_lat": {"mean": 0.000004977777777774662, "squared_diffs": 3.7497777777147205e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 329636000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "281",
            "first_attempt_count": "281",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0011725693950177937, "squared_diffs": 0.06349922794689672},
            "plan_lat": {"mean": 0.017867512455516016, "squared_diffs": 2.0682363508762065},
            "run_lat": {"mean": 0.005546395017793593, "squared_diffs": 0.25252081118715297},
            "service_lat": {"mean": 0.024591231316725963, "squared_diffs": 4.3944279191119655},
            "overhead_lat": {"mean": 0.000004754448398576811, "squared_diffs": 2.9720569395013815e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 309894000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 5
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000563, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000525, "squared_diffs": 0},
            "run_lat": {"mean": 0.080531, "squared_diffs": 0},
            "service_lat": {"mean": 0.081622, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999891225, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 340329000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010161, "squared_diffs": 0},
            "run_lat": {"mean": 0.003191, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.84142, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 178580000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00451615, "squared_diffs": 1.4097227827996999},
            "plan_lat": {"mean": 0.057459264285714275, "squared_diffs": 89.98595824830443},
            "run_lat": {"mean": 0.002637871428571428, "squared_diffs": 0.024207648507371435},
            "service_lat": {"mean": 0.06461892500000001, "squared_diffs": 115.65032062251142},
            "overhead_lat": {"mean": 0.000005639285714281793, "squared_diffs": 2.392856785712592e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 436927000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.025023086021505374, "squared_diffs": 1.868022839179312},
            "run_lat": {"mean": 0.00529458064516129, "squared_diffs": 0.11146425711464517},
            "service_lat": {"mean": -9223372036.824457, "squared_diffs": 2.868303303836001},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.965396899729967e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 826429000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, total_ranges, unavailable_ranges, under_replicated_ranges, over_replicated_ranges FROM system.replication_stats",
                "app": "$ internal-get-previous-replication-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000123, "squared_diffs": 0},
            "plan_lat": {"mean": 0.121392, "squared_diffs": 0},
            "run_lat": {"mean": 0.004479, "squared_diffs": 0},
            "service_lat": {"mean": 0.125997, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_stats@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667633", "nanos": 365600000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "f7cd2ba1778dfe55c90883f0717da782"
    }, {
        "key": {
            "key_data": {
                "query": "DELETE FROM system.replication_critical_localities WHERE ((zone_id = $1) AND (subzone_id = $2)) AND (locality = $3)",
                "app": "$ internal-delete-old-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007445, "squared_diffs": 0},
            "run_lat": {"mean": 0.004254, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.843071, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "delete range",
                    "attrs": [{"key": "from", "value": "replication_critical_localities"}, {
                        "key": "spans",
                        "value": "1 span"
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667694", "nanos": 212768000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "98bb01192575ae6cbc5d8895af6a4a8a"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00043, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000066, "squared_diffs": 0},
            "run_lat": {"mean": 0.041801, "squared_diffs": 0},
            "service_lat": {"mean": 0.0423, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999960614, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 188050000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.014623142857142857, "squared_diffs": 0.6165974644165713},
            "run_lat": {"mean": 0.06098978571428571, "squared_diffs": 17.11778218553178},
            "service_lat": {"mean": -9223372036.779158, "squared_diffs": 24.22562193925114},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 8.913048077374697e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670167", "nanos": 369852000}
            },
            "bytes_read": {"mean": 61.171428571428564, "squared_diffs": 45.94285714285707},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03409759139784947, "squared_diffs": 4.5681293060144705},
            "run_lat": {"mean": 0.005456064516129032, "squared_diffs": 0.0933523789536129},
            "service_lat": {"mean": -9223372036.815218, "squared_diffs": 5.941989538816415},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 2.6411726139485836e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 803284000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002340681818181818, "squared_diffs": 9.269667954545455e-7},
            "plan_lat": {"mean": 0.022829477272727265, "squared_diffs": 0.027291015860977284},
            "run_lat": {"mean": 0.0031044545454545457, "squared_diffs": 0.0007577452569090908},
            "service_lat": {"mean": 0.026195840909090908, "squared_diffs": 0.03172071672788637},
            "overhead_lat": {"mean": 0.000027840909090909333, "squared_diffs": 0.0000010154498863636301},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670159", "nanos": 261596000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000516, "squared_diffs": 0},
            "plan_lat": {"mean": 0.017007, "squared_diffs": 0},
            "run_lat": {"mean": 0.0017, "squared_diffs": 0},
            "service_lat": {"mean": 0.019227, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 163866000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "7",
            "first_attempt_count": "7",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03761314285714286, "squared_diffs": 0.03850998488485714},
            "run_lat": {"mean": 0.002959, "squared_diffs": 0.000020720144000000005},
            "service_lat": {"mean": -9223372036.8142, "squared_diffs": 0.03943395454552956},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.8189894035458565e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667935", "nanos": 131402000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01843054676258993, "squared_diffs": 3.7072995510368925},
            "run_lat": {"mean": 0.0021664820143884895, "squared_diffs": 0.01415185612341007},
            "service_lat": {"mean": -9223372036.834179, "squared_diffs": 4.0712536839382665},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.8917489796876907e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 204957000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000569, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000756, "squared_diffs": 0},
            "run_lat": {"mean": 0.080213, "squared_diffs": 0},
            "service_lat": {"mean": 0.081541, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999891225, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 207873000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, type, config, violating_ranges FROM system.replication_constraint_stats",
                "app": "$ internal-get-previous-replication-constraint-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000098, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012718, "squared_diffs": 0},
            "run_lat": {"mean": 0.002702, "squared_diffs": 0},
            "service_lat": {"mean": 0.015521, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_constraint_stats@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667633", "nanos": 137823000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8193f301855daa91e386e77600237248"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.replication_critical_localities(report_id, zone_id, subzone_id, locality, at_risk_ranges) VALUES ($1, $2, __more3__)",
                "app": "$ internal-upsert-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.003338, "squared_diffs": 0},
            "run_lat": {"mean": 0.000941, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.850494, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{
                        "key": "into",
                        "value": "replication_critical_localities(zone_id, subzone_id, locality, report_id, at_risk_ranges)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "5 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667633", "nanos": 178260000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "9863e8ac8cc890d893309f379e54a0f5"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000564590909090909, "squared_diffs": 0.0000023884906363636367},
            "plan_lat": {"mean": 0.10958095454545451, "squared_diffs": 9.936800265791911},
            "run_lat": {"mean": 0.00541565909090909, "squared_diffs": 0.004488029293886362},
            "service_lat": {"mean": 0.11556563636363637, "squared_diffs": 10.228972609992182},
            "overhead_lat": {"mean": 0.0000044318181818218645, "squared_diffs": 1.0079545454822075e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670159", "nanos": 248929000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "20",
            "first_attempt_count": "20",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0152384, "squared_diffs": 0.010884863190800002},
            "run_lat": {"mean": 0.0129524, "squared_diffs": 0.035954005426799995},
            "service_lat": {"mean": -9223372036.826582, "squared_diffs": 0.0845389362439164},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.4551915228366852e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 326616000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "553",
            "first_attempt_count": "553",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01059919710669078, "squared_diffs": 5.879469171591516},
            "run_lat": {"mean": 0.026799734177215196, "squared_diffs": 117.69781527712193},
            "service_lat": {"mean": -9223372036.817373, "squared_diffs": 136.80620855909729},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.721368895843625e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670295", "nanos": 37319000}
            },
            "bytes_read": {"mean": 61.065099457504495, "squared_diffs": 141.65641952983822},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-constraint-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "7",
            "first_attempt_count": "7",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00625, "squared_diffs": 0.000070470448},
            "run_lat": {"mean": 0.0055874285714285704, "squared_diffs": 0.0007223851457142857},
            "service_lat": {"mean": -9223372036.842936, "squared_diffs": 0.0010740894140326418},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 3.637978807091713e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667935", "nanos": 68214000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "7",
            "first_attempt_count": "7",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006881857142857143, "squared_diffs": 0.0002471884508571429},
            "run_lat": {"mean": 0.001988, "squared_diffs": 0.000020530011999999994},
            "service_lat": {"mean": -9223372036.845901, "squared_diffs": 0.0003451851043791976},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.1827872842550278e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667935", "nanos": 97053000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, locality, at_risk_ranges FROM system.replication_critical_localities",
                "app": "$ internal-get-previous-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000111, "squared_diffs": 0},
            "plan_lat": {"mean": 0.004419, "squared_diffs": 0},
            "run_lat": {"mean": 0.001301, "squared_diffs": 0},
            "service_lat": {"mean": 0.005835, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000039999999999996635, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_critical_localities@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667633", "nanos": 156057000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2ca2454132ebf293b08c1ce3c8e31fe3"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.replication_stats(report_id, zone_id, subzone_id, total_ranges, unavailable_ranges, under_replicated_ranges, over_replicated_ranges) VALUES ($1, $2, __more5__)",
                "app": "$ internal-upsert-replication-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "5",
            "first_attempt_count": "5",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.011005, "squared_diffs": 0.0002860072},
            "run_lat": {"mean": 0.002362, "squared_diffs": 0.000007680122},
            "service_lat": {"mean": -9223372036.841406, "squared_diffs": 0.0003834486415144056},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{
                        "key": "into",
                        "value": "replication_stats(zone_id, subzone_id, report_id, total_ranges, unavailable_ranges, under_replicated_ranges, over_replicated_ranges)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667633", "nanos": 947514000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "9a9ea8776e2ba48d9f3ba370728fa4b2"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.034419442446043155, "squared_diffs": 35.98562043922858},
            "run_lat": {"mean": 0.05226151079136691, "squared_diffs": 161.44602705158348},
            "service_lat": {"mean": -9223372036.768082, "squared_diffs": 348.4274891498462},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.6921043172478676e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 193707000}
            },
            "bytes_read": {"mean": 10619.8237410072, "squared_diffs": 470621682.36330825},
            "rows_read": {"mean": 15.787769784172658, "squared_diffs": 652.4784172661875}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "25",
            "first_attempt_count": "25",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0009396399999999999, "squared_diffs": 0.000009351823759999999},
            "plan_lat": {"mean": 0.05522276000000001, "squared_diffs": 0.6704285294905601},
            "run_lat": {"mean": 0.0063044, "squared_diffs": 0.006134907718000001},
            "service_lat": {"mean": 0.06247096, "squared_diffs": 0.8004430037849601},
            "overhead_lat": {"mean": 0.000004159999999999199, "squared_diffs": 2.5335999999997574e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 51403000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.016866, "squared_diffs": 0},
            "run_lat": {"mean": 0.007387, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.830519, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 165037000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012693, "squared_diffs": 0},
            "run_lat": {"mean": 0.003055, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.839024, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 187923000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 4
        }, "stats": {
            "count": "140",
            "first_attempt_count": "140",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007902264285714286, "squared_diffs": 0.4099814951772214},
            "run_lat": {"mean": 0.04272332857142857, "squared_diffs": 27.849600094484884},
            "service_lat": {"mean": -9223372036.804142, "squared_diffs": 34.99755495386489},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.6400008462369442e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670380", "nanos": 432843000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"generated\" FROM system.reports_meta WHERE id = $1",
                "app": "$ internal-get-previous-timestamp",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 4
        },
        "stats": {
            "count": "18",
            "first_attempt_count": "18",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012294388888888888, "squared_diffs": 0.009528111250277775},
            "run_lat": {"mean": 0.006489666666666667, "squared_diffs": 0.008573154674000001},
            "service_lat": {"mean": -9223372036.835987, "squared_diffs": 0.017582265045348322},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 3.637978807091713e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "reports_meta@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667995", "nanos": 281698000}
            },
            "bytes_read": {"mean": 37.666666666666664, "squared_diffs": 3.99999999999999},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "123698b64e4fe90f6269b2133c44863e"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.021493, "squared_diffs": 0},
            "run_lat": {"mean": 0.00275, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.830528, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 542762000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.001514, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000535, "squared_diffs": 0},
            "run_lat": {"mean": 0.017046, "squared_diffs": 0},
            "service_lat": {"mean": 0.019098, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 533119000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "3",
            "first_attempt_count": "3",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009402333333333334, "squared_diffs": 0.00002809496866666666},
            "run_lat": {"mean": 0.003041, "squared_diffs": 0.000006008328000000001},
            "service_lat": {"mean": -9223372036.842327, "squared_diffs": 0.000059240581322228536},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.637978807091713e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667585", "nanos": 782997000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.025532161290322576, "squared_diffs": 2.23770087358058},
            "run_lat": {"mean": 0.009412365591397848, "squared_diffs": 0.4717498188975699},
            "service_lat": {"mean": -9223372036.819822, "squared_diffs": 4.757286277974345},
            "overhead_lat": {"mean": -9223372036.854765, "squared_diffs": 1.3249518815428019e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670319", "nanos": 805843000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0008165999999999999, "squared_diffs": 0.0007466863747999999},
            "plan_lat": {"mean": 0.0305542888888889, "squared_diffs": 0.19390549615324443},
            "run_lat": {"mean": 0.0068878444444444445, "squared_diffs": 0.011439162153911117},
            "service_lat": {"mean": 0.03826337777777778, "squared_diffs": 0.23660141803457774},
            "overhead_lat": {"mean": 0.00000464444444444377, "squared_diffs": 7.631111111110392e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 660487000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.005263760714285714, "squared_diffs": 1.401292946926968},
            "plan_lat": {"mean": 0.05233155714285714, "squared_diffs": 67.81739145756708},
            "run_lat": {"mean": 0.00220650357142857, "squared_diffs": 0.00791445874399643},
            "service_lat": {"mean": 0.05980595357142855, "squared_diffs": 88.67385054473037},
            "overhead_lat": {"mean": 0.000004132142857140117, "squared_diffs": 6.610110714287858e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 394336000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000441, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000104, "squared_diffs": 0},
            "run_lat": {"mean": 0.02528, "squared_diffs": 0},
            "service_lat": {"mean": 0.025828, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 560314000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "139",
            "first_attempt_count": "139",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009678309352517985, "squared_diffs": 0.4274451158616979},
            "run_lat": {"mean": 0.02963688489208633, "squared_diffs": 14.173590813096157},
            "service_lat": {"mean": -9223372036.815462, "squared_diffs": 19.215782340583246},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 9.778887033462524e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670087", "nanos": 786364000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.035662827956989246, "squared_diffs": 7.121567024641248},
            "run_lat": {"mean": 0.0013833010752688165, "squared_diffs": 0.0002342918735698924},
            "service_lat": {"mean": -9223372036.817722, "squared_diffs": 7.120257966365898},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.984030965715647e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670319", "nanos": 813667000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000803688888888889, "squared_diffs": 0.00012634463164444445},
            "plan_lat": {"mean": 0.0732945777777778, "squared_diffs": 3.2863128533989783},
            "run_lat": {"mean": 0.0038426666666666665, "squared_diffs": 0.002023110742},
            "service_lat": {"mean": 0.0779464, "squared_diffs": 3.394540735122801},
            "overhead_lat": {"mean": 0.000005466666666670089, "squared_diffs": 7.392000000008704e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 650466000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0007905833333333335, "squared_diffs": 0.0000019661758333333335},
            "plan_lat": {"mean": 0.041214458333333336, "squared_diffs": 0.2542996731559583},
            "run_lat": {"mean": 0.004466291666666666, "squared_diffs": 0.002406489270958333},
            "service_lat": {"mean": 0.04647570833333333, "squared_diffs": 0.30015428336895833},
            "overhead_lat": {"mean": 0.000004375000000000364, "squared_diffs": 1.1162499999983229e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 392659000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "279",
            "first_attempt_count": "279",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.06118746594982079, "squared_diffs": 172.0780909041214},
            "run_lat": {"mean": 0.02197809677419355, "squared_diffs": 23.05611279002639},
            "service_lat": {"mean": -9223372036.771595, "squared_diffs": 320.2999345706994},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.004526322707534e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 111957000}
            },
            "bytes_read": {"mean": 10620.54838709678, "squared_diffs": 470662411.0967731},
            "rows_read": {"mean": 15.788530465949817, "squared_diffs": 652.5232974910399}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "279",
            "first_attempt_count": "279",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.011076673835125454, "squared_diffs": 1.8943345711733188},
            "run_lat": {"mean": 0.002183161290322582, "squared_diffs": 0.06105809399374193},
            "service_lat": {"mean": -9223372036.841509, "squared_diffs": 2.6332646479277173},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.3738615456968546e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 126472000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        }, "stats": {
            "count": "557",
            "first_attempt_count": "557",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007656888689407543, "squared_diffs": 0.995972666923099},
            "run_lat": {"mean": 0.0018887253141831226, "squared_diffs": 0.025188967090973062},
            "service_lat": {"mean": -9223372036.845234, "squared_diffs": 1.0929085622665298},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.8186256056651473e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 109972000}
            },
            "bytes_read": {"mean": 61.014362657091546, "squared_diffs": 31.885098743267513},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012332271428571427, "squared_diffs": 0.4761318365078429},
            "run_lat": {"mean": 0.04883361428571429, "squared_diffs": 11.239673319706586},
            "service_lat": {"mean": -9223372036.79361, "squared_diffs": 16.341556103372568},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 5.638867150992155e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670165", "nanos": 700397000}
            },
            "bytes_read": {"mean": 61.171428571428564, "squared_diffs": 45.94285714285707},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000537, "squared_diffs": 0},
            "plan_lat": {"mean": 0.005684, "squared_diffs": 0},
            "run_lat": {"mean": 0.001483, "squared_diffs": 0},
            "service_lat": {"mean": 0.007708, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000039999999999996635, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 541010000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00847, "squared_diffs": 0},
            "run_lat": {"mean": 0.001079, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.845222, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 560197000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 7
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.011333, "squared_diffs": 0},
            "run_lat": {"mean": 0.002514, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.840925, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 556075000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.002680083333333333, "squared_diffs": 0.0016080858598333334},
            "plan_lat": {"mean": 0.06097400000000001, "squared_diffs": 0.71548728091},
            "run_lat": {"mean": 0.007251708333333333, "squared_diffs": 0.009543949420958334},
            "service_lat": {"mean": 0.07091054166666667, "squared_diffs": 0.8776632215739585},
            "overhead_lat": {"mean": 0.000004750000000005185, "squared_diffs": 4.944999999997904e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 51283000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.018008737410071942, "squared_diffs": 3.81210428122183},
            "run_lat": {"mean": 0.019146323741007196, "squared_diffs": 12.054376808772863},
            "service_lat": {"mean": -9223372036.81761, "squared_diffs": 29.153400073311786},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 5.256879376247525e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 393558000}
            },
            "bytes_read": {"mean": 10619.86330935252, "squared_diffs": 470532750.80575484},
            "rows_read": {"mean": 15.787769784172658, "squared_diffs": 652.4784172661875}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000949, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000939, "squared_diffs": 0},
            "run_lat": {"mean": 0.162733, "squared_diffs": 0},
            "service_lat": {"mean": 0.164629, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000008000000000008, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 167321000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "137",
            "first_attempt_count": "137",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.023500956204379562, "squared_diffs": 3.0005410276877362},
            "run_lat": {"mean": 0.06556500729927008, "squared_diffs": 29.880617231915004},
            "service_lat": {"mean": -9223372036.765703, "squared_diffs": 42.160744784945564},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 8.025381248444319e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670380", "nanos": 592056000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0006187045454545453, "squared_diffs": 0.000005459023159090908},
            "plan_lat": {"mean": 0.07419454545454546, "squared_diffs": 5.135194370216911},
            "run_lat": {"mean": 0.007103318181818181, "squared_diffs": 0.017235338471545455},
            "service_lat": {"mean": 0.08192122727272728, "squared_diffs": 5.180141798933727},
            "overhead_lat": {"mean": 0.00000465909090909206, "squared_diffs": 8.188636363657482e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670158", "nanos": 822450000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009025, "squared_diffs": 0},
            "run_lat": {"mean": 0.001014, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.844734, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 44480000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01866342086330935, "squared_diffs": 1.4814792590417587},
            "run_lat": {"mean": 0.004180938848920864, "squared_diffs": 0.09853592153796044},
            "service_lat": {"mean": -9223372036.831926, "squared_diffs": 1.9550002634641714},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.6261765267699957e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 402017000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03874791397849462, "squared_diffs": 6.795550493711312},
            "run_lat": {"mean": 0.006839301075268818, "squared_diffs": 0.1835958846495699},
            "service_lat": {"mean": -9223372036.809189, "squared_diffs": 9.185795521083492},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.4015101846307516e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670320", "nanos": 708698000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.004809357142857143, "squared_diffs": 1.627168965858286},
            "plan_lat": {"mean": 0.061651875, "squared_diffs": 101.49945939525865},
            "run_lat": {"mean": 0.004688739285714286, "squared_diffs": 0.4944714143299679},
            "service_lat": {"mean": 0.0711600107142857, "squared_diffs": 144.63490486861696},
            "overhead_lat": {"mean": 0.000010039285714289824, "squared_diffs": 0.0000029604165678595425},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670285", "nanos": 134161000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007987, "squared_diffs": 0},
            "run_lat": {"mean": 0.000667, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.846117, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 52121000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "105",
            "first_attempt_count": "105",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.025677980952380955, "squared_diffs": 0.3787236631899617},
            "run_lat": {"mean": 0.0035080666666666665, "squared_diffs": 0.03356294115453332},
            "service_lat": {"mean": -9223372036.82559, "squared_diffs": 0.4865573141614732},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 4.547473508864641e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667576", "nanos": 210784000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.023563657142857145, "squared_diffs": 2.1698922098757714},
            "run_lat": {"mean": 0.020206585714285717, "squared_diffs": 1.671163240038986},
            "service_lat": {"mean": -9223372036.811003, "squared_diffs": 7.649503196080332},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.4374458007514477e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670169", "nanos": 806399000}
            },
            "bytes_read": {"mean": 61.171428571428564, "squared_diffs": 45.94285714285707},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0113, "squared_diffs": 0},
            "run_lat": {"mean": 0.006025, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.837446, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 27258000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000584, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008269, "squared_diffs": 0},
            "run_lat": {"mean": 0.002351, "squared_diffs": 0},
            "service_lat": {"mean": 0.011207, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000012655, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 36887000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 3
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000464, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000071, "squared_diffs": 0},
            "run_lat": {"mean": 0.024805, "squared_diffs": 0},
            "service_lat": {"mean": 0.025343, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 52247000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "554",
            "first_attempt_count": "554",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012838758122743677, "squared_diffs": 3.7743873487855897},
            "run_lat": {"mean": 0.012672270758122753, "squared_diffs": 4.412934880307386},
            "service_lat": {"mean": -9223372036.829256, "squared_diffs": 14.183275302304537},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.2427335605025291e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670298", "nanos": 361787000}
            },
            "bytes_read": {"mean": 61.057761732851944, "squared_diffs": 126.15162454873635},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03810348387096774, "squared_diffs": 3.926812508597225},
            "run_lat": {"mean": 0.00399936559139785, "squared_diffs": 0.024173102377569897},
            "service_lat": {"mean": -9223372036.812674, "squared_diffs": 4.544355335561704},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 3.001332515850663e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670320", "nanos": 691997000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 3
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0008647727272727274, "squared_diffs": 0.0007653233897272726},
            "plan_lat": {"mean": 0.04038797727272728, "squared_diffs": 0.45960611183097727},
            "run_lat": {"mean": 0.011122681818181821, "squared_diffs": 0.06042494260954547},
            "service_lat": {"mean": 0.05238052272727272, "squared_diffs": 0.8032009406729774},
            "overhead_lat": {"mean": 0.000005090909090913039, "squared_diffs": 1.5163636363719652e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670158", "nanos": 835127000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000423, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00006, "squared_diffs": 0},
            "run_lat": {"mean": 0.076437, "squared_diffs": 0},
            "service_lat": {"mean": 0.076923, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 70946000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000683, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000511, "squared_diffs": 0},
            "run_lat": {"mean": 0.014366, "squared_diffs": 0},
            "service_lat": {"mean": 0.015563, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 956620000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "554",
            "first_attempt_count": "554",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009500797833935018, "squared_diffs": 2.3318031906553562},
            "run_lat": {"mean": 0.02363898916967508, "squared_diffs": 82.97033663052596},
            "service_lat": {"mean": -9223372036.821629, "squared_diffs": 104.63587344679036},
            "overhead_lat": {"mean": -9223372036.854761, "squared_diffs": 0.000001389140379615128},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670299", "nanos": 533483000}
            },
            "bytes_read": {"mean": 61.05054151624549, "squared_diffs": 110.58483754512673},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0006935555555555554, "squared_diffs": 0.000029107199111111114},
            "plan_lat": {"mean": 0.07247128888888887, "squared_diffs": 3.6958559245172444},
            "run_lat": {"mean": 0.00803084444444444, "squared_diffs": 0.01679729541191111},
            "service_lat": {"mean": 0.08120046666666665, "squared_diffs": 3.8701913375851995},
            "overhead_lat": {"mean": 0.00000477777777777292, "squared_diffs": 1.8377777777331393e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 709171000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.028503, "squared_diffs": 0},
            "run_lat": {"mean": 0.052589, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.773666, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85476, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 68677000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012137, "squared_diffs": 0},
            "run_lat": {"mean": 0.004874, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.83776, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 70791000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010392414285714286, "squared_diffs": 0.29080296614898565},
            "run_lat": {"mean": 0.024860900000000002, "squared_diffs": 2.5778997733143},
            "service_lat": {"mean": -9223372036.819513, "squared_diffs": 4.599861044080171},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.838511813431978e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670169", "nanos": 866669000}
            },
            "bytes_read": {"mean": 61.22857142857141, "squared_diffs": 60.34285714285716},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02447662365591398, "squared_diffs": 2.4058006551938282},
            "run_lat": {"mean": 0.0036499139784946233, "squared_diffs": 0.031801538723311824},
            "service_lat": {"mean": -9223372036.826649, "squared_diffs": 2.987583122059732},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.511093720793724e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670322", "nanos": 25612000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "45",
            "first_attempt_count": "45",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002230444444444444, "squared_diffs": 4.078059111111112e-7},
            "plan_lat": {"mean": 0.02649406666666667, "squared_diffs": 0.12345314713279999},
            "run_lat": {"mean": 0.0034995333333333336, "squared_diffs": 0.0008228223132000001},
            "service_lat": {"mean": 0.030222555555555555, "squared_diffs": 0.14159965412111108},
            "overhead_lat": {"mean": 0.000005911111111110933, "squared_diffs": 1.4016444444444924e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670098", "nanos": 722013000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0007713333333333334, "squared_diffs": 0.000001940775333333333},
            "plan_lat": {"mean": 0.03234875, "squared_diffs": 0.14778017652050002},
            "run_lat": {"mean": 0.008258999999999999, "squared_diffs": 0.024916438017999993},
            "service_lat": {"mean": 0.041383875, "squared_diffs": 0.257893144972625},
            "overhead_lat": {"mean": 0.000004791666666666073, "squared_diffs": 1.9195833333328877e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 644088000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.022997784172661875, "squared_diffs": 4.696254487097051},
            "run_lat": {"mean": 0.015253859712230224, "squared_diffs": 8.17864874781553},
            "service_lat": {"mean": -9223372036.816517, "squared_diffs": 24.02661160599382},
            "overhead_lat": {"mean": -9223372036.854733, "squared_diffs": 0.0000037198697100393474},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670294", "nanos": 501704000}
            },
            "bytes_read": {"mean": 10619.86330935252, "squared_diffs": 470532750.80575484},
            "rows_read": {"mean": 15.787769784172658, "squared_diffs": 652.4784172661875}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "141",
            "first_attempt_count": "141",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0150433829787234, "squared_diffs": 0.4703032783733192},
            "run_lat": {"mean": 0.042647276595744694, "squared_diffs": 16.702447172654214},
            "service_lat": {"mean": -9223372036.797083, "squared_diffs": 22.219765305639157},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 5.20230969414115e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670379", "nanos": 483307000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.035394580645161294, "squared_diffs": 4.347976484862646},
            "run_lat": {"mean": 0.005950419354838709, "squared_diffs": 0.10759364750464516},
            "service_lat": {"mean": -9223372036.813423, "squared_diffs": 5.817910932113591},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.7284841053187847e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 993755000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008022, "squared_diffs": 0},
            "run_lat": {"mean": 0.005997, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.840754, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 980033000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000545, "squared_diffs": 0},
            "plan_lat": {"mean": 0.050239, "squared_diffs": 0},
            "run_lat": {"mean": 0.00583, "squared_diffs": 0},
            "service_lat": {"mean": 0.05662, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000005999999999999062, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 49545000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0156285107913669, "squared_diffs": 1.5369833753454678},
            "run_lat": {"mean": 0.002522464028776978, "squared_diffs": 0.017068858119140287},
            "service_lat": {"mean": -9223372036.836624, "squared_diffs": 1.657305946944689},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.18723323289305e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670294", "nanos": 554018000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "14",
            "first_attempt_count": "14",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.020576428571428572, "squared_diffs": 0.01287899178942857},
            "run_lat": {"mean": 0.004510857142857143, "squared_diffs": 0.0003761432317142857},
            "service_lat": {"mean": -9223372036.829683, "squared_diffs": 0.014872381660097744},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.0913936421275139e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667576", "nanos": 62703000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 9
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00502787142857143, "squared_diffs": 1.7612844494213715},
            "plan_lat": {"mean": 0.05329891785714285, "squared_diffs": 86.36597850004709},
            "run_lat": {"mean": 0.0037259642857142847, "squared_diffs": 0.3080773003936429},
            "service_lat": {"mean": 0.062059660714285717, "squared_diffs": 124.31978014404875},
            "overhead_lat": {"mean": 0.000006907142857139541, "squared_diffs": 7.112958571426184e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 732613000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT status, payload, progress FROM system.jobs WHERE id = $1",
                "app": "$ internal-log-job",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.005563749999999999, "squared_diffs": 0.00005242358275},
            "run_lat": {"mean": 0.000722, "squared_diffs": 1.20786e-7},
            "service_lat": {"mean": -9223372036.848488, "squared_diffs": 0.00005712341226171702},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 290461000}
            },
            "bytes_read": {"mean": 992.5, "squared_diffs": 4636.999999999996},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "c7894e61845cfaa89e45dccbd18e1835"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0005731363636363637, "squared_diffs": 0.0000033619751818181824},
            "plan_lat": {"mean": 0.09515422727272725, "squared_diffs": 5.071299879237729},
            "run_lat": {"mean": 0.003471431818181818, "squared_diffs": 0.0011309189307954545},
            "service_lat": {"mean": 0.09920413636363636, "squared_diffs": 5.124960269653181},
            "overhead_lat": {"mean": 0.000005340909090904537, "squared_diffs": 7.078863636350196e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670159", "nanos": 248862000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.019028, "squared_diffs": 0},
            "run_lat": {"mean": 0.008502, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.827242, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 659395000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.004764578571428571, "squared_diffs": 1.572644761114271},
            "plan_lat": {"mean": 0.05452559285714284, "squared_diffs": 81.26276306064557},
            "run_lat": {"mean": 0.001790946428571429, "squared_diffs": 0.007054124968196428},
            "service_lat": {"mean": 0.061085574999999996, "squared_diffs": 105.04061579568246},
            "overhead_lat": {"mean": 0.0000044571428571485924, "squared_diffs": 3.5314857142876898e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 431260000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000672, "squared_diffs": 0},
            "plan_lat": {"mean": 0.003902, "squared_diffs": 0},
            "run_lat": {"mean": 0.003021, "squared_diffs": 0},
            "service_lat": {"mean": 0.007599, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 653441000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03804392473118279, "squared_diffs": 5.093815984132473},
            "run_lat": {"mean": 0.0159024623655914, "squared_diffs": 0.7592141853451182},
            "service_lat": {"mean": -9223372036.800823, "squared_diffs": 8.913503943305841},
            "overhead_lat": {"mean": -9223372036.854752, "squared_diffs": 1.8300124793313444e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 786754000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT payload, progress, created_by_type, created_by_id FROM system.jobs WHERE id = $1",
                "app": "$ internal-load-job-query",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "2",
            "first_attempt_count": "2",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0050795, "squared_diffs": 0.0000016362404999999996},
            "run_lat": {"mean": 0.0011375, "squared_diffs": 2.613645e-7},
            "service_lat": {"mean": -9223372036.848555, "squared_diffs": 0.0000032079406082630157},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.637978807091713e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 272430000}
            },
            "bytes_read": {"mean": 991, "squared_diffs": 2178},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "6f1da718fe2846931ef56339fbed481c"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0007954583333333333, "squared_diffs": 0.0000012698179583333331},
            "plan_lat": {"mean": 0.04551533333333334, "squared_diffs": 0.2653291830413333},
            "run_lat": {"mean": 0.0008020833333333334, "squared_diffs": 0.00001986534183333333},
            "service_lat": {"mean": 0.047118375000000004, "squared_diffs": 0.267022216343625},
            "overhead_lat": {"mean": 0.000005500000000004922, "squared_diffs": 5.740000000023867e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 602009000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET progress = $2 WHERE id = $1",
                "app": "$ internal-job-update",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0065144999999999995, "squared_diffs": 0.00002543780300000001},
            "run_lat": {"mean": 0.0025835, "squared_diffs": 5.388650000000001e-7},
            "service_lat": {"mean": -9223372036.845675, "squared_diffs": 0.00003308631858089939},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "progress"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 301559000}
            },
            "bytes_read": {"mean": 992.5, "squared_diffs": 4636.999999999996},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "7a0119ec573c6d511a0b65e1ea41e25d"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000724, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000571, "squared_diffs": 0},
            "run_lat": {"mean": 0.021382, "squared_diffs": 0},
            "service_lat": {"mean": 0.02268, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999960614, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 657019000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.027607559139784948, "squared_diffs": 2.2001288715069247},
            "run_lat": {"mean": 0.0051175591397849465, "squared_diffs": 0.11959193657292476},
            "service_lat": {"mean": -9223372036.822042, "squared_diffs": 3.3297124457421887},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.6370904631912708e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 809490000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "DELETE FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (\"columnIDs\" = $3)) AND (\"statisticID\" NOT IN (SELECT \"statisticID\" FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (name = $2)) AND (\"columnIDs\" = $3) ORDER BY \"createdAt\" DESC LIMIT $4))",
                "app": "$ internal-delete-statistics",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "12",
            "first_attempt_count": "12",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0141655, "squared_diffs": 0.000250919733},
            "run_lat": {"mean": 0.011562083333333336, "squared_diffs": 0.011401159508916667},
            "service_lat": {"mean": -9223372036.829044, "squared_diffs": 0.011416084107622737},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.9103830456733704e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "delete",
                    "attrs": [{"key": "from", "value": "table_statistics"}],
                    "children": [{
                        "name": "merge join (anti)",
                        "attrs": [{
                            "key": "equality",
                            "value": "(statisticID) = (statisticID)"
                        }, {"key": "left cols are key", "value": ""}, {"key": "right cols are key", "value": ""}],
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "\"columnIDs\" = _"}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "table_statistics@primary"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }, {
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "+\"statisticID\""}],
                            "children": [{
                                "name": "limit",
                                "attrs": [{"key": "count", "value": "_"}],
                                "children": [{
                                    "name": "sort",
                                    "attrs": [{"key": "order", "value": "-\"createdAt\""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "(name = _) AND (\"columnIDs\" = _)"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "table_statistics@primary"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 470154000}
            },
            "bytes_read": {"mean": 6188.833333333333, "squared_diffs": 816032571.6666666},
            "rows_read": {"mean": 5.166666666666668, "squared_diffs": 163.66666666666666}
        }, "id": "a958395dbc6e7181b57c38e55ee60583"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "2",
            "first_attempt_count": "2",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.048438, "squared_diffs": 0.003016780488000001},
            "run_lat": {"mean": 0.0887365, "squared_diffs": 0.009018110700500001},
            "service_lat": {"mean": -9223372036.717598, "squared_diffs": 0.022466721013188362},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 896329000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000421, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000061, "squared_diffs": 0},
            "run_lat": {"mean": 0.179099, "squared_diffs": 0},
            "service_lat": {"mean": 0.179584, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999752447, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 826666000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.024733, "squared_diffs": 0},
            "run_lat": {"mean": 0.065228, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.76481, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 825825000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "279",
            "first_attempt_count": "279",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.06330175985663083, "squared_diffs": 198.20559583823092},
            "run_lat": {"mean": 0.021847132616487453, "squared_diffs": 21.143363023584097},
            "service_lat": {"mean": -9223372036.769615, "squared_diffs": 348.568100063585},
            "overhead_lat": {"mean": -9223372036.854753, "squared_diffs": 5.238616722635925e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 129469000}
            },
            "bytes_read": {"mean": 10624.24014336917, "squared_diffs": 463379498.91039467},
            "rows_read": {"mean": 15.792114695340503, "squared_diffs": 647.9426523297489}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "279",
            "first_attempt_count": "279",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012507605734767023, "squared_diffs": 1.7424274282506305},
            "run_lat": {"mean": 0.0023780681003584218, "squared_diffs": 0.0199324369777061},
            "service_lat": {"mean": -9223372036.839876, "squared_diffs": 1.9543146495379915},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.4266122383996844e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 153574000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "555",
            "first_attempt_count": "555",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010085625225225226, "squared_diffs": 2.6026072134760487},
            "run_lat": {"mean": 0.0114302036036036, "squared_diffs": 4.517871384783992},
            "service_lat": {"mean": -9223372036.833244, "squared_diffs": 13.274702437323867},
            "overhead_lat": {"mean": -9223372036.854769, "squared_diffs": 1.352964318357408e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670294", "nanos": 497640000}
            },
            "bytes_read": {"mean": 61.05045045045046, "squared_diffs": 110.58738738738666},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "137",
            "first_attempt_count": "137",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012967759124087588, "squared_diffs": 0.8961238679370511},
            "run_lat": {"mean": 0.030399620437956208, "squared_diffs": 13.805774843662261},
            "service_lat": {"mean": -9223372036.811405, "squared_diffs": 21.42966567595795},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.9972503650933504e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670340", "nanos": 170914000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.013692028571428571, "squared_diffs": 0.5332219950499429},
            "run_lat": {"mean": 0.04926518571428572, "squared_diffs": 9.630053323868585},
            "service_lat": {"mean": -9223372036.791819, "squared_diffs": 14.68871538609892},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.0186340659856796e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670167", "nanos": 304107000}
            },
            "bytes_read": {"mean": 61.171428571428564, "squared_diffs": 45.94285714285707},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.table_statistics(\"tableID\", name, \"columnIDs\", \"rowCount\", \"distinctCount\", \"nullCount\", histogram) VALUES ($1, $2, __more5__)",
                "app": "$ internal-insert-statistic",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        },
        "stats": {
            "count": "12",
            "first_attempt_count": "12",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.005753916666666666, "squared_diffs": 0.00007741625891666666},
            "run_lat": {"mean": 0.0017924166666666668, "squared_diffs": 0.00001284393891666667},
            "service_lat": {"mean": -9223372036.847227, "squared_diffs": 0.00011668388106045313},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 8.731149137020111e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "table_statistics(tableID, statisticID, name, columnIDs, createdAt, rowCount, distinctCount, nullCount, histogram)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "9 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 485564000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2c0ca7d780730fb06908ef8997701136"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 8
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002205681818181818, "squared_diffs": 4.324007954545454e-7},
            "plan_lat": {"mean": 0.026787863636363634, "squared_diffs": 0.08616898698718185},
            "run_lat": {"mean": 0.0030056818181818184, "squared_diffs": 0.0003461434015454545},
            "service_lat": {"mean": 0.030019068181818175, "squared_diffs": 0.08860861717279543},
            "overhead_lat": {"mean": 0.0000049545454545453635, "squared_diffs": 2.0990909090897358e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670159", "nanos": 261596000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.011233877697841729, "squared_diffs": 0.7191190925238418},
            "run_lat": {"mean": 0.002333158273381295, "squared_diffs": 0.007873459631035973},
            "service_lat": {"mean": -9223372036.841208, "squared_diffs": 0.792882803507382},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.4006218407303095e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670294", "nanos": 531940000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "139",
            "first_attempt_count": "139",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.013838582733812948, "squared_diffs": 0.7552434336937988},
            "run_lat": {"mean": 0.029976345323741015, "squared_diffs": 8.261412686049422},
            "service_lat": {"mean": -9223372036.810966, "squared_diffs": 13.50224423756299},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 5.493347998708487e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670355", "nanos": 230543000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02029977419354839, "squared_diffs": 1.3164458890322577},
            "run_lat": {"mean": 0.0049154193548387095, "squared_diffs": 0.09784635123064515},
            "service_lat": {"mean": -9223372036.829552, "squared_diffs": 2.1316168059565825},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.4010660126805305e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 446788000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "39",
            "first_attempt_count": "39",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006615435897435898, "squared_diffs": 0.008749006499589741},
            "run_lat": {"mean": 0.0018855384615384617, "squared_diffs": 0.00046010881369230774},
            "service_lat": {"mean": -9223372036.84627, "squared_diffs": 0.012930770826642402},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.473825588822365e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670160", "nanos": 521997000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.011033, "squared_diffs": 0},
            "run_lat": {"mean": 0.001452, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.842287, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 450437000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0244621654676259, "squared_diffs": 4.109339227692388},
            "run_lat": {"mean": 0.01722333093525179, "squared_diffs": 9.499742897953558},
            "service_lat": {"mean": -9223372036.813097, "squared_diffs": 24.445795202744193},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.790329745039344e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670294", "nanos": 497480000}
            },
            "bytes_read": {"mean": 10619.8237410072, "squared_diffs": 470621682.36330825},
            "rows_read": {"mean": 15.787769784172658, "squared_diffs": 652.4784172661875}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0025177428571428575, "squared_diffs": 0.3432985938734857},
            "plan_lat": {"mean": 0.057956917857142846, "squared_diffs": 112.43360942380106},
            "run_lat": {"mean": 0.0003973357142857141, "squared_diffs": 0.000020283774442857142},
            "service_lat": {"mean": 0.0608757857142857, "squared_diffs": 125.07416825806514},
            "overhead_lat": {"mean": 0.00000378928571428952, "squared_diffs": 1.0765678571601753e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670285", "nanos": 345500000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.022164, "squared_diffs": 0},
            "run_lat": {"mean": 0.005225, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.827381, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 438147000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0012369090909090908, "squared_diffs": 0.00040970129763636363},
            "plan_lat": {"mean": 0.08785838636363637, "squared_diffs": 4.356434401858432},
            "run_lat": {"mean": 0.003326727272727273, "squared_diffs": 0.0005526787187272727},
            "service_lat": {"mean": 0.09243179545454547, "squared_diffs": 4.441330407421158},
            "overhead_lat": {"mean": 0.000009772727272736023, "squared_diffs": 5.394372727287477e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670158", "nanos": 833398000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000544, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008206, "squared_diffs": 0},
            "run_lat": {"mean": 0.00372, "squared_diffs": 0},
            "service_lat": {"mean": 0.012475, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000005000000000001531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 441409000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000514, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00058, "squared_diffs": 0},
            "run_lat": {"mean": 0.036047, "squared_diffs": 0},
            "service_lat": {"mean": 0.037145, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000039999999999970615, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 440119000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-constraint-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "39",
            "first_attempt_count": "39",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006272743589743589, "squared_diffs": 0.0013706900134358973},
            "run_lat": {"mean": 0.003933923076923077, "squared_diffs": 0.007640831914769231},
            "service_lat": {"mean": -9223372036.844563, "squared_diffs": 0.009593905546353199},
            "overhead_lat": {"mean": -9223372036.854769, "squared_diffs": 5.638867150992155e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670160", "nanos": 465526000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, total_ranges, unavailable_ranges, under_replicated_ranges, over_replicated_ranges FROM system.replication_stats",
                "app": "$ internal-get-previous-replication-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000074, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00425, "squared_diffs": 0},
            "run_lat": {"mean": 0.001021, "squared_diffs": 0},
            "service_lat": {"mean": 0.005348, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_stats@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599668053", "nanos": 614351000}
            },
            "bytes_read": {"mean": 190, "squared_diffs": 0},
            "rows_read": {"mean": 5, "squared_diffs": 0}
        },
        "id": "f7cd2ba1778dfe55c90883f0717da782"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0109, "squared_diffs": 0},
            "run_lat": {"mean": 0.000795, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.843077, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 459889000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"generated\" FROM system.reports_meta WHERE id = $1",
                "app": "$ internal-get-previous-timestamp",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "114",
            "first_attempt_count": "114",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006945903508771931, "squared_diffs": 0.04837178095793859},
            "run_lat": {"mean": 0.0011613596491228068, "squared_diffs": 0.00016882895825438601},
            "service_lat": {"mean": -9223372036.846664, "squared_diffs": 0.05087868023474584},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.2923708204180002e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "reports_meta@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670220", "nanos": 777748000}
            },
            "bytes_read": {"mean": 37.83333333333332, "squared_diffs": 15.833333333333307},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "123698b64e4fe90f6269b2133c44863e"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000424, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00007, "squared_diffs": 0},
            "run_lat": {"mean": 0.029405, "squared_diffs": 0},
            "service_lat": {"mean": 0.029902, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 459996000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "20",
            "first_attempt_count": "20",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00922795, "squared_diffs": 0.00161854539895},
            "run_lat": {"mean": 0.0023605, "squared_diffs": 0.00006269906300000001},
            "service_lat": {"mean": -9223372036.843182, "squared_diffs": 0.001651673621381633},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 5.4569682106375694e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667578", "nanos": 541420000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007435714285714285, "squared_diffs": 0.09926945260628572},
            "run_lat": {"mean": 0.005285114285714285, "squared_diffs": 0.06609916166908573},
            "service_lat": {"mean": -9223372036.842052, "squared_diffs": 0.3270707300907816},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 1.0950316209346056e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670169", "nanos": 803556000}
            },
            "bytes_read": {"mean": 61.22857142857141, "squared_diffs": 60.34285714285716},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, type, config, violating_ranges FROM system.replication_constraint_stats",
                "app": "$ internal-get-previous-replication-constraint-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000069, "squared_diffs": 0},
            "plan_lat": {"mean": 0.004766, "squared_diffs": 0},
            "run_lat": {"mean": 0.002668, "squared_diffs": 0},
            "service_lat": {"mean": 0.007507, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_constraint_stats@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599668053", "nanos": 573100000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8193f301855daa91e386e77600237248"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.reports_meta(id, \"generated\") VALUES ($1, $2)",
                "app": "$ internal-timestamp-upsert-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "39",
            "first_attempt_count": "39",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.004707051282051282, "squared_diffs": 0.000425571099897436},
            "run_lat": {"mean": 0.0012225384615384613, "squared_diffs": 0.00001195217369230769},
            "service_lat": {"mean": -9223372036.84884, "squared_diffs": 0.0005188356699363794},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 5.311449058353901e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "reports_meta(id, generated)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670160", "nanos": 493790000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8885934942d275df753d2557319a71f1"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(_), max(\"timestamp\") FROM [DELETE FROM system.eventlog WHERE (\"timestamp\" >= $1) AND (\"timestamp\" <= $2) LIMIT _ RETURNING \"timestamp\"]",
                "app": "$ internal-eventlog-gc",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.013762749999999999, "squared_diffs": 0.0010978551147499999},
            "run_lat": {"mean": 0.0026680000000000002, "squared_diffs": 0.000010497802000000002},
            "service_lat": {"mean": -9223372036.83834, "squared_diffs": 0.0012936331258970313},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.0913936421275139e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{"name": "scan buffer", "attrs": [{"key": "label", "value": "buffer 1"}]}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM system.eventlog WHERE (\"timestamp\" >= $1) AND (\"timestamp\" <= $2) LIMIT 1000 RETURNING \"timestamp\""
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "eventlog"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "eventlog@primary"
                                    }, {"key": "spans", "value": "1 span"}, {"key": "limit", "value": "1000"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599669973", "nanos": 520042000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d9e794d0de0fc9dd11bc6cecd100aa32"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(_), max(\"timestamp\") FROM [DELETE FROM system.rangelog WHERE (\"timestamp\" >= $1) AND (\"timestamp\" <= $2) LIMIT _ RETURNING \"timestamp\"]",
                "app": "$ internal-rangelog-gc",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00806175, "squared_diffs": 0.000028943292749999993},
            "run_lat": {"mean": 0.00650375, "squared_diffs": 0.000016436168750000003},
            "service_lat": {"mean": -9223372036.840204, "squared_diffs": 0.00005317750765243545},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 7.275957614183426e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{"name": "scan buffer", "attrs": [{"key": "label", "value": "buffer 1"}]}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM system.rangelog WHERE (\"timestamp\" >= $1) AND (\"timestamp\" <= $2) LIMIT 1000 RETURNING \"timestamp\""
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "rangelog"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "rangelog@primary"
                                    }, {"key": "spans", "value": "1 span"}, {"key": "limit", "value": "1000"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599669973", "nanos": 510835000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "2e39e0fa2c7899da57c776407084f7c5"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "553",
            "first_attempt_count": "553",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008498934900542487, "squared_diffs": 1.5652000497216572},
            "run_lat": {"mean": 0.028199195298372528, "squared_diffs": 87.8279247176249},
            "service_lat": {"mean": -9223372036.818071, "squared_diffs": 107.99682880600812},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 5.23603375768289e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670300", "nanos": 41477000}
            },
            "bytes_read": {"mean": 61.028933092224236, "squared_diffs": 63.53707052441227},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "44",
            "first_attempt_count": "44",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0005513863636363637, "squared_diffs": 0.00017981399043181818},
            "plan_lat": {"mean": 0.03217604545454546, "squared_diffs": 0.18486034195390916},
            "run_lat": {"mean": 0.0032045227272727277, "squared_diffs": 0.0004012716509772728},
            "service_lat": {"mean": 0.035937136363636366, "squared_diffs": 0.2069756007151818},
            "overhead_lat": {"mean": 0.000005181818181815676, "squared_diffs": 9.425454545448436e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670158", "nanos": 846225000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT zone_id, subzone_id, locality, at_risk_ranges FROM system.replication_critical_localities",
                "app": "$ internal-get-previous-replication-critical-localities",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000126, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006421, "squared_diffs": 0},
            "run_lat": {"mean": 0.00073, "squared_diffs": 0},
            "service_lat": {"mean": 0.00728, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000003000000000000398, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "replication_critical_localities@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599668053", "nanos": 597246000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2ca2454132ebf293b08c1ce3c8e31fe3"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "32",
            "first_attempt_count": "32",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0010524375, "squared_diffs": 0.000061273947875},
            "plan_lat": {"mean": 0.03637009374999999, "squared_diffs": 0.23310039367471874},
            "run_lat": {"mean": 0.01033453125, "squared_diffs": 0.03640845991796874},
            "service_lat": {"mean": 0.047761874999999995, "squared_diffs": 0.3919347020815},
            "overhead_lat": {"mean": 0.000004812499999999771, "squared_diffs": 1.5548749999999927e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670094", "nanos": 603013000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 6
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.028420333333333336, "squared_diffs": 3.183065561240667},
            "run_lat": {"mean": 0.004587989247311828, "squared_diffs": 0.06073530773498924},
            "service_lat": {"mean": -9223372036.821766, "squared_diffs": 4.119476423016749},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 5.675246939063072e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670321", "nanos": 419732000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0039467607142857145, "squared_diffs": 1.065610228544968},
            "plan_lat": {"mean": 0.05806573928571428, "squared_diffs": 99.07592171999397},
            "run_lat": {"mean": 0.0015646, "squared_diffs": 0.0017338561471999994},
            "service_lat": {"mean": 0.06358297857142857, "squared_diffs": 120.29517013311585},
            "overhead_lat": {"mean": 0.000005878571428567434, "squared_diffs": 3.903818714285771e-7},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 594937000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000522, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00998, "squared_diffs": 0},
            "run_lat": {"mean": 0.001642, "squared_diffs": 0},
            "service_lat": {"mean": 0.012147, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000012655, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 911809000}
            },
            "bytes_read": {"mean": 40, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006457, "squared_diffs": 0},
            "run_lat": {"mean": 0.000855, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.84746, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 926380000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.015393550359712219, "squared_diffs": 2.140913602664795},
            "run_lat": {"mean": 0.0037334136690647486, "squared_diffs": 0.14647953817342807},
            "service_lat": {"mean": -9223372036.83564, "squared_diffs": 3.372888916728698},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.055458026006818e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 357634000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "DELETE FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (\"columnIDs\" = $3)) AND (\"statisticID\" NOT IN (SELECT \"statisticID\" FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (name = $2)) AND (\"columnIDs\" = $3) ORDER BY \"createdAt\" DESC LIMIT $4))",
                "app": "$ internal-delete-statistics",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "17",
            "first_attempt_count": "17",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012064294117647058, "squared_diffs": 0.00034284289352941175},
            "run_lat": {"mean": 0.00326935294117647, "squared_diffs": 0.00025063755388235297},
            "service_lat": {"mean": -9223372036.83944, "squared_diffs": 0.0006984883912082296},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.3096723705530167e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "delete",
                    "attrs": [{"key": "from", "value": "table_statistics"}],
                    "children": [{
                        "name": "merge join (anti)",
                        "attrs": [{
                            "key": "equality",
                            "value": "(statisticID) = (statisticID)"
                        }, {"key": "left cols are key", "value": ""}, {"key": "right cols are key", "value": ""}],
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "\"columnIDs\" = _"}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "table_statistics@primary"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }, {
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "+\"statisticID\""}],
                            "children": [{
                                "name": "limit",
                                "attrs": [{"key": "count", "value": "_"}],
                                "children": [{
                                    "name": "sort",
                                    "attrs": [{"key": "order", "value": "-\"createdAt\""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "(name = _) AND (\"columnIDs\" = _)"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "table_statistics@primary"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667635", "nanos": 3977000}
            },
            "bytes_read": {"mean": 8495.41176470588, "squared_diffs": 1867982950.1176465},
            "rows_read": {"mean": 7.764705882352942, "squared_diffs": 479.05882352941177}
        }, "id": "a958395dbc6e7181b57c38e55ee60583"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006962, "squared_diffs": 0},
            "run_lat": {"mean": 0.001319, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.84649, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 921469000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0007464583333333333, "squared_diffs": 0.0000014194899583333332},
            "plan_lat": {"mean": 0.04114504166666666, "squared_diffs": 0.4870720376589583},
            "run_lat": {"mean": 0.006413708333333334, "squared_diffs": 0.011666732254958333},
            "service_lat": {"mean": 0.048309374999999995, "squared_diffs": 0.6494115477116249},
            "overhead_lat": {"mean": 0.000004166666666668196, "squared_diffs": 4.1333333333397207e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670093", "nanos": 301155000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009923, "squared_diffs": 0},
            "run_lat": {"mean": 0.004255, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.840595, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 913482000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.025285852517985614, "squared_diffs": 6.20623881486295},
            "run_lat": {"mean": 0.012140273381294964, "squared_diffs": 2.238852251227223},
            "service_lat": {"mean": -9223372036.817347, "squared_diffs": 15.725997609042679},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.8590071704238653e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 342359000}
            },
            "bytes_read": {"mean": 10619.8237410072, "squared_diffs": 470621682.36330825},
            "rows_read": {"mean": 15.787769784172658, "squared_diffs": 652.4784172661875}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02798078494623656, "squared_diffs": 3.064890892113698},
            "run_lat": {"mean": 0.005447172043010752, "squared_diffs": 0.1032622276412473},
            "service_lat": {"mean": -9223372036.821348, "squared_diffs": 4.284980268810614},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.9467628337442875e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670320", "nanos": 718605000}
            },
            "bytes_read": {"mean": 10671.193548387098, "squared_diffs": 96845764.51612909},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01734787096774194, "squared_diffs": 0.8167689901344516},
            "run_lat": {"mean": 0.0019438924731182798, "squared_diffs": 0.0017348268409247314},
            "service_lat": {"mean": -9223372036.83548, "squared_diffs": 0.8921473868686007},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 4.743924364447594e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670320", "nanos": 731561000}
            },
            "bytes_read": {"mean": 11.924731182795696, "squared_diffs": 1216656.4731182784},
            "rows_read": {"mean": 0.021505376344086044, "squared_diffs": 3.9569892473118276}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT status, payload, progress FROM system.jobs WHERE id = $1",
                "app": "$ internal-log-job",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00487125, "squared_diffs": 0.000019505164749999993},
            "run_lat": {"mean": 0.0008225, "squared_diffs": 8.187300000000002e-8},
            "service_lat": {"mean": -9223372036.84908, "squared_diffs": 0.000021412528440123424},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 3.637978807091713e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 937696000}
            },
            "bytes_read": {"mean": 1192, "squared_diffs": 84705.99999999997},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "c7894e61845cfaa89e45dccbd18e1835"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.table_statistics(\"tableID\", name, \"columnIDs\", \"rowCount\", \"distinctCount\", \"nullCount\", histogram) VALUES ($1, $2, __more5__)",
                "app": "$ internal-insert-statistic",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "17",
            "first_attempt_count": "17",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0078033529411764705, "squared_diffs": 0.002045224327882353},
            "run_lat": {"mean": 0.0019312941176470593, "squared_diffs": 0.000024890669529411768},
            "service_lat": {"mean": -9223372036.845036, "squared_diffs": 0.0021970351117488462},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 7.639755494892597e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "table_statistics(tableID, statisticID, name, columnIDs, createdAt, rowCount, distinctCount, nullCount, histogram)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "9 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667635", "nanos": 15609000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2c0ca7d780730fb06908ef8997701136"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "43",
            "first_attempt_count": "43",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002871162790697674, "squared_diffs": 0.00001614472241860465},
            "plan_lat": {"mean": 0.028390976744186044, "squared_diffs": 0.14369462610097677},
            "run_lat": {"mean": 0.0036555116279069766, "squared_diffs": 0.0007138834447441861},
            "service_lat": {"mean": 0.032543813953488376, "squared_diffs": 0.15806057379451163},
            "overhead_lat": {"mean": 0.000210209302325582, "squared_diffs": 0.00007617587911627897},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670218", "nanos": 941684000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00051, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00088, "squared_diffs": 0},
            "run_lat": {"mean": 0.02652, "squared_diffs": 0},
            "service_lat": {"mean": 0.027913, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 926496000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "43",
            "first_attempt_count": "43",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0007345813953488371, "squared_diffs": 0.00003293057646511628},
            "plan_lat": {"mean": 0.10999404651162788, "squared_diffs": 10.173468297677907},
            "run_lat": {"mean": 0.006539279069767441, "squared_diffs": 0.015427361412651169},
            "service_lat": {"mean": 0.11727199999999997, "squared_diffs": 10.278079945741998},
            "overhead_lat": {"mean": 0.000004093023255817078, "squared_diffs": 2.762790697668924e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670218", "nanos": 919276000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000486, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000092, "squared_diffs": 0},
            "run_lat": {"mean": 0.018881, "squared_diffs": 0},
            "service_lat": {"mean": 0.019462, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000030000000000030003, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 927457000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "553",
            "first_attempt_count": "553",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01108882640144666, "squared_diffs": 2.934017243329335},
            "run_lat": {"mean": 0.026277195298372504, "squared_diffs": 111.96175689395092},
            "service_lat": {"mean": -9223372036.817404, "squared_diffs": 125.38681259073928},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.3544998839497566e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670299", "nanos": 948911000}
            },
            "bytes_read": {"mean": 61.036166365280295, "squared_diffs": 79.27667269439428},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "68",
            "first_attempt_count": "68",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.03750960294117647, "squared_diffs": 0.3533756328302794},
            "run_lat": {"mean": 0.015941088235294113, "squared_diffs": 0.21438060206947057},
            "service_lat": {"mean": -9223372036.80132, "squared_diffs": 0.7607723709952552},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 1.4959368854761124e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667581", "nanos": 865660000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "70",
            "first_attempt_count": "70",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009825885714285713, "squared_diffs": 0.1055004192210857},
            "run_lat": {"mean": 0.006587414285714285, "squared_diffs": 0.10995290153898572},
            "service_lat": {"mean": -9223372036.838356, "squared_diffs": 0.3921328915566846},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 3.019522409886122e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670169", "nanos": 882333000}
            },
            "bytes_read": {"mean": 61.22857142857141, "squared_diffs": 60.34285714285716},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "139",
            "first_attempt_count": "139",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.012484302158273383, "squared_diffs": 0.9255991658033093},
            "run_lat": {"mean": 0.02414928776978417, "squared_diffs": 6.420969005480488},
            "service_lat": {"mean": -9223372036.818136, "squared_diffs": 11.842046855170338},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.4115357771515846e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670361", "nanos": 256673000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT payload, progress, created_by_type, created_by_id FROM system.jobs WHERE id = $1",
                "app": "$ internal-load-job-query",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        },
        "stats": {
            "count": "2",
            "first_attempt_count": "2",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0056735, "squared_diffs": 0.0000010731124999999995},
            "run_lat": {"mean": 0.0022495, "squared_diffs": 0.0000016146045000000006},
            "service_lat": {"mean": -9223372036.846848, "squared_diffs": 0.000005318906914908439},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 919612000}
            },
            "bytes_read": {"mean": 1189.5, "squared_diffs": 42340.5},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "6f1da718fe2846931ef56339fbed481c"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET progress = $2 WHERE id = $1",
                "app": "$ internal-job-update",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 2
        }, "stats": {
            "count": "4",
            "first_attempt_count": "4",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00385325, "squared_diffs": 0.0000040803387500000016},
            "run_lat": {"mean": 0.0022802499999999997, "squared_diffs": 0.0000027796687499999993},
            "service_lat": {"mean": -9223372036.848639, "squared_diffs": 0.0000032296738936565816},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 7.275957614183426e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "progress"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 947585000}
            },
            "bytes_read": {"mean": 1192, "squared_diffs": 84705.99999999997},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "7a0119ec573c6d511a0b65e1ea41e25d"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, config FROM system.zones",
                "app": "$ internal-read-zone-configs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000059, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010029, "squared_diffs": 0},
            "run_lat": {"mean": 0.002522, "squared_diffs": 0},
            "service_lat": {"mean": 0.012614, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "zones@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 85635000}
            },
            "bytes_read": {"mean": 327, "squared_diffs": 0},
            "rows_read": {"mean": 7, "squared_diffs": 0}
        },
        "id": "8c5672fb35f0f690bab77a63ea610380"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(*) FROM system.jobs WHERE (id IN (_, _)) AND (((status != _) AND (status != _)) AND (status != _))",
                "app": "$ internal-poll-show-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "55",
            "first_attempt_count": "55",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00015545454545454543, "squared_diffs": 5.594336363636365e-7},
            "plan_lat": {"mean": 0.030538018181818175, "squared_diffs": 0.09927967923298182},
            "run_lat": {"mean": 0.0028426363636363636, "squared_diffs": 0.0007991966767272727},
            "service_lat": {"mean": 0.03354114545454545, "squared_diffs": 0.10725497739483637},
            "overhead_lat": {"mean": 0.000005036363636362869, "squared_diffs": 6.115927272727377e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "group (scalar)",
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "((status != _) AND (status != _)) AND (status != _)"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 521667000}
            },
            "bytes_read": {"mean": 395.05454545454546, "squared_diffs": 15780.836363636396},
            "rows_read": {"mean": 2, "squared_diffs": 0}
        }, "id": "484b1d667f7877b30d7d5185c94f6cb0"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT status, payload, progress FROM system.jobs WHERE id = $1",
                "app": "$ internal-log-job",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "46",
            "first_attempt_count": "46",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.014742608695652172, "squared_diffs": 0.040692077942956525},
            "run_lat": {"mean": 0.0014206086956521744, "squared_diffs": 0.00024688772695652167},
            "service_lat": {"mean": -9223372036.83861, "squared_diffs": 0.04453122124323272},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 7.275957614183426e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 709348000}
            },
            "bytes_read": {"mean": 600.7391304347825, "squared_diffs": 11383946.869565219},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "c7894e61845cfaa89e45dccbd18e1835"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
                "app": "$ internal-claim-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "93",
            "first_attempt_count": "93",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.039686806451612905, "squared_diffs": 5.782517386214517},
            "run_lat": {"mean": 0.003749365591397849, "squared_diffs": 0.012916012613569892},
            "service_lat": {"mean": -9223372036.811333, "squared_diffs": 6.329424558280152},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.874891601502895e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id, claim_instance_id"
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "limit",
                            "attrs": [{"key": "count", "value": "_"}],
                            "children": [{
                                "name": "sort",
                                "attrs": [{"key": "order", "value": "-created"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "claim_session_id IS NULL"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "jobs@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670322", "nanos": 161805000}
            },
            "bytes_read": {"mean": 10671.000000000002, "squared_diffs": 97073215.99999996},
            "rows_read": {"mean": 15.881720430107526, "squared_diffs": 59.69892473118277}
        }, "id": "765e1ec92d4225ffd4a3b5e87f74453f"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.settings(name, value, \"lastUpdated\", \"valueType\") VALUES ($1, $2, now(), $3)",
                "app": "$ internal-update-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "5",
            "first_attempt_count": "5",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0006368, "squared_diffs": 6.514679999999997e-8},
            "run_lat": {"mean": 0.0002936, "squared_diffs": 6.705200000000004e-9},
            "service_lat": {"mean": -9223372036.853842, "squared_diffs": 7.998824003152549e-8},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 3.637978807091713e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "settings(name, value, lastUpdated, valueType)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "4 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 705163000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "3126c39fe3b47dcc819ad8553c6ae7d3"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.role_options(username, option, value) SELECT username, _, _ FROM system.role_options WHERE option = _",
                "app": "$ internal-add CREATELOGIN where a role already has CREATEROLE",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000106, "squared_diffs": 0},
            "plan_lat": {"mean": 0.001748, "squared_diffs": 0},
            "run_lat": {"mean": 0.001538, "squared_diffs": 0},
            "service_lat": {"mean": 0.003396, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000097, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "role_options(username, option, value)"}, {
                        "key": "auto commit",
                        "value": ""
                    }],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "option = _"}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "role_options@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 789478000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "36541f1aedf5aa0a50bb8dd8b55f6b5b"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE rides ADD FOREIGN KEY (vehicle_city, vehicle_id) REFERENCES vehicles (city, id)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000476, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002149, "squared_diffs": 0},
            "run_lat": {"mean": 0.048168, "squared_diffs": 0},
            "service_lat": {"mean": 0.0508, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000006999999999993123, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "alter table"},
                "most_recent_plan_timestamp": {"seconds": "1599667591", "nanos": 120116000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "5f8c08d87da94120124dded3721b93a5"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE users SPLIT AT VALUES (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00020925000000000002, "squared_diffs": 3.108775e-7},
            "plan_lat": {"mean": 0.004344125000000001, "squared_diffs": 0.000048733796874999996},
            "run_lat": {"mean": 0.070279875, "squared_diffs": 0.007353274786875},
            "service_lat": {"mean": 0.0748485, "squared_diffs": 0.006725297179999999},
            "overhead_lat": {"mean": 0.00001525000000000094, "squared_diffs": 6.05500000000512e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "split",
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667580", "nanos": 22834000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "edec33f67feaaf8d589d3275b73bc405"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE vehicles SCATTER FROM (_, _) TO (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00009949999999999999, "squared_diffs": 7.9206e-8},
            "plan_lat": {"mean": 0.0182955, "squared_diffs": 0.0022865655220000005},
            "run_lat": {"mean": 1.00007725, "squared_diffs": 10.610464517371499},
            "service_lat": {"mean": 1.018484125, "squared_diffs": 10.651185794994875},
            "overhead_lat": {"mean": 0.000011875000000085602, "squared_diffs": 6.874999999647725e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "scatter"},
                "most_recent_plan_timestamp": {"seconds": "1599667581", "nanos": 913822000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "7a8b8f03cc7189f5ada040dda4085b1f"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO rides VALUES ($1, $2, __more8__), (__more400__)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 500, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.111622, "squared_diffs": 0},
            "run_lat": {"mean": 0.063816, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.679333, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rides(id, city, vehicle_city, rider_id, vehicle_id, start_address, end_address, start_time, end_time, revenue)"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{"name": "values", "attrs": [{"key": "size", "value": "10 columns, 500 rows"}]}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667578", "nanos": 813306000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "3ff75cc24da9bc91edbe2611f5c22144"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE rides SPLIT AT VALUES (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00018475000000000002, "squared_diffs": 3.172575e-7},
            "plan_lat": {"mean": 0.012014375, "squared_diffs": 0.00020902584187500005},
            "run_lat": {"mean": 0.1382555, "squared_diffs": 0.38411650318600005},
            "service_lat": {"mean": 0.15046912499999998, "squared_diffs": 0.38281114831087504},
            "overhead_lat": {"mean": 0.00001450000000000236, "squared_diffs": 1.3600000000020265e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "split",
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667585", "nanos": 419164000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "49c5ec8124e02f2092f6270047b86ef2"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE user_promo_codes ADD FOREIGN KEY (city, user_id) REFERENCES users (city, id)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000047, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007686, "squared_diffs": 0},
            "run_lat": {"mean": 1.750366, "squared_diffs": 0},
            "service_lat": {"mean": 1.7581069999999999, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000007999999999785956, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "alter table"},
                "most_recent_plan_timestamp": {"seconds": "1599667594", "nanos": 440758000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "b977ee4b3a196762935d0ffaf0909d55"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(*) > _ FROM [SHOW ALL CLUSTER SETTINGS] AS _ (v) WHERE v = _",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "6",
            "first_attempt_count": "6",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0021675, "squared_diffs": 0.00012081931749999999},
            "plan_lat": {"mean": 0.0015836666666666664, "squared_diffs": 0.000025979015333333327},
            "run_lat": {"mean": 0.0023158333333333334, "squared_diffs": 0.00003486787883333334},
            "service_lat": {"mean": 0.006081166666666666, "squared_diffs": 0.00048274316483333323},
            "overhead_lat": {"mean": 0.000014166666666665909, "squared_diffs": 1.483333333334428e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "variable = _"}],
                            "children": [{
                                "name": "virtual table",
                                "attrs": [{"key": "table", "value": "cluster_settings@primary"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 939698000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "9eb194c1aff4d8cd70a11e9efb2c5aa4"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE vehicles ADD FOREIGN KEY (city, owner_id) REFERENCES users (city, id)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.036298, "squared_diffs": 0},
            "plan_lat": {"mean": 0.059243, "squared_diffs": 0},
            "run_lat": {"mean": 0.09605, "squared_diffs": 0},
            "service_lat": {"mean": 0.191612, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000021000000000021002, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "alter table"},
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 478879000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "1d3779b3828c216a7ba24a464df1243e"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE vehicle_location_histories ADD FOREIGN KEY (city, ride_id) REFERENCES rides (city, id)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000258, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002595, "squared_diffs": 0},
            "run_lat": {"mean": 0.051824, "squared_diffs": 0},
            "service_lat": {"mean": 0.054684, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000007000000000000062, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "alter table"},
                "most_recent_plan_timestamp": {"seconds": "1599667592", "nanos": 30111000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "3f148afe0b6a0f24fc8cc2bc3ac1b0bc"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT * FROM crdb_internal.node_build_info",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 6, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000543, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000273, "squared_diffs": 0},
            "run_lat": {"mean": 0.000134, "squared_diffs": 0},
            "service_lat": {"mean": 0.000965, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.00001500000000000004, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "virtual table",
                    "attrs": [{"key": "table", "value": "node_build_info@primary"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667596", "nanos": 116472000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "ff11c2f7c872db9795b1d146e8266a32"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS rides (id UUID NOT NULL, city VARCHAR NOT NULL, vehicle_city VARCHAR NULL, rider_id UUID NULL, vehicle_id UUID NULL, start_address VARCHAR NULL, end_address VARCHAR NULL, start_time TIMESTAMP NULL, end_time TIMESTAMP NULL, revenue DECIMAL(10,2) NULL, PRIMARY KEY (city ASC, id ASC), INDEX rides_auto_index_fk_city_ref_users (city ASC, rider_id ASC), INDEX rides_auto_index_fk_vehicle_city_ref_vehicles (vehicle_city ASC, vehicle_id ASC), CONSTRAINT check_vehicle_city_city CHECK (vehicle_city = city))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000866, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000385, "squared_diffs": 0},
            "run_lat": {"mean": 0.006576, "squared_diffs": 0},
            "service_lat": {"mean": 0.007833, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000005999999999999062, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 133391000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "82e6823214c5590f650fb3b768ce3403"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO vehicle_location_histories VALUES ($1, $2, __more3__), (__more900__)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1000, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.066527, "squared_diffs": 0},
            "run_lat": {"mean": 0.042601, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.74564, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854769, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert fast path",
                    "attrs": [{
                        "key": "into",
                        "value": "vehicle_location_histories(city, ride_id, timestamp, lat, long)"
                    }, {"key": "auto commit", "value": ""}, {"key": "size", "value": "5 columns, 1000 rows"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 444534000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "519318781305cd1a8702f0a5451b3246"
    }, {
        "key": {
            "key_data": {
                "query": "SET CLUSTER SETTING \"enterprise.license\" = $1",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000024, "squared_diffs": 0},
            "run_lat": {"mean": 0.006484, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.848267, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set cluster setting"},
                "most_recent_plan_timestamp": {"seconds": "1599667575", "nanos": 147287000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "77c11fe182756cf10a3e3cd4099f349f"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO users VALUES ($1, $2, __more3__), (__more40__)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 50, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00061, "squared_diffs": 0},
            "run_lat": {"mean": 4.173896, "squared_diffs": 0},
            "service_lat": {"mean": -9223372032.680267, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert fast path",
                    "attrs": [{
                        "key": "into",
                        "value": "users(id, city, name, address, credit_card)"
                    }, {"key": "auto commit", "value": ""}, {"key": "size", "value": "5 columns, 50 rows"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667578", "nanos": 397437000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "ee0b847fe8f972609b352ea3f90e5270"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO vehicles VALUES ($1, $2, __more6__), (__more10__)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 15, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000417, "squared_diffs": 0},
            "run_lat": {"mean": 0.087172, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.767183, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert fast path",
                    "attrs": [{
                        "key": "into",
                        "value": "vehicles(id, city, type, owner_id, creation_time, status, current_location, ext)"
                    }, {"key": "auto commit", "value": ""}, {"key": "size", "value": "8 columns, 15 rows"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667578", "nanos": 548821000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "80bbe3f3a0db7bbbce995883dc39c953"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE rides SCATTER FROM (_, _) TO (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00007112500000000001, "squared_diffs": 6.267087499999999e-8},
            "plan_lat": {"mean": 0.021281875, "squared_diffs": 0.0018880761728749997},
            "run_lat": {"mean": 0.6138830000000001, "squared_diffs": 3.5157829768880005},
            "service_lat": {"mean": 0.635253375, "squared_diffs": 3.598875494395875},
            "overhead_lat": {"mean": 0.0000173749999999739, "squared_diffs": 5.75875000001666e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "scatter"},
                "most_recent_plan_timestamp": {"seconds": "1599667585", "nanos": 751844000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4c4fa3d1f85ea10fb11eb555dbb473c7"
    }, {
        "key": {
            "key_data": {
                "query": "SET sql_safe_updates = _",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000024, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000074, "squared_diffs": 0},
            "run_lat": {"mean": 0.000069, "squared_diffs": 0},
            "service_lat": {"mean": 0.000173, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.00000600000000000001, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set"},
                "most_recent_plan_timestamp": {"seconds": "1599667596", "nanos": 117994000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "318003da2a828a9db00b8a1be8d2fb82"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS vehicles (id UUID NOT NULL, city VARCHAR NOT NULL, type VARCHAR NULL, owner_id UUID NULL, creation_time TIMESTAMP NULL, status VARCHAR NULL, current_location VARCHAR NULL, ext JSONB NULL, PRIMARY KEY (city ASC, id ASC), INDEX vehicles_auto_index_fk_city_ref_users (city ASC, owner_id ASC))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000171, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000416, "squared_diffs": 0},
            "run_lat": {"mean": 0.009525, "squared_diffs": 0},
            "service_lat": {"mean": 0.010118, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000005999999999999062, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 115520000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "7cdf5071f0ac85dad5162ebf3eff27bb"
    }, {
        "key": {
            "key_data": {
                "query": "SET CLUSTER SETTING \"cluster.organization\" = $1",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000029, "squared_diffs": 0},
            "run_lat": {"mean": 0.00965, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.845095, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set cluster setting"},
                "most_recent_plan_timestamp": {"seconds": "1599667575", "nanos": 140341000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "708ddfda82480399414481fbdfb494a8"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE rides ADD FOREIGN KEY (city, rider_id) REFERENCES users (city, id)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000222, "squared_diffs": 0},
            "plan_lat": {"mean": 0.013113, "squared_diffs": 0},
            "run_lat": {"mean": 0.060281, "squared_diffs": 0},
            "service_lat": {"mean": 0.073623, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000006999999999993123, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "alter table"},
                "most_recent_plan_timestamp": {"seconds": "1599667590", "nanos": 42769000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "c798d669225f2fae56feb8a599779b4f"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS user_promo_codes (city VARCHAR NOT NULL, user_id UUID NOT NULL, code VARCHAR NOT NULL, \"timestamp\" TIMESTAMP NULL, usage_count INT8 NULL, PRIMARY KEY (city ASC, user_id ASC, code ASC))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000093, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000312, "squared_diffs": 0},
            "run_lat": {"mean": 0.005889, "squared_diffs": 0},
            "service_lat": {"mean": 0.006299, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004999999999999796, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 173236000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "3a2d721e8d09eb0ad69a5d841ef95fa0"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO promo_codes VALUES ($1, $2, __more3__), (__more900__)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1000, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.08701, "squared_diffs": 0},
            "run_lat": {"mean": 0.039798, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.727962, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert fast path",
                    "attrs": [{
                        "key": "into",
                        "value": "promo_codes(code, description, creation_time, expiration_time, rules)"
                    }, {"key": "auto commit", "value": ""}, {"key": "size", "value": "5 columns, 1000 rows"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 911917000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "f520de740e7b14c9758f697af577dfcb"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE users SCATTER FROM (_, _) TO (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000132625, "squared_diffs": 2.26521875e-7},
            "plan_lat": {"mean": 0.005392125000000001, "squared_diffs": 0.000036150080875},
            "run_lat": {"mean": 0.255632625, "squared_diffs": 0.642737451929875},
            "service_lat": {"mean": 0.261168375, "squared_diffs": 0.6469067873038751},
            "overhead_lat": {"mean": 0.0000109999999999949, "squared_diffs": 4.000000000000196e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "scatter"},
                "most_recent_plan_timestamp": {"seconds": "1599667580", "nanos": 673865000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "ef60d5ec5a1d72b104d818e97a96ebce"
    }, {
        "key": {
            "key_data": {
                "query": "ALTER TABLE vehicles SPLIT AT VALUES (_, _)",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "8",
            "first_attempt_count": "8",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002515, "squared_diffs": 2.7733e-7},
            "plan_lat": {"mean": 0.007615874999999999, "squared_diffs": 0.000131465230875},
            "run_lat": {"mean": 0.148567375, "squared_diffs": 0.08012160648187498},
            "service_lat": {"mean": 0.156447625, "squared_diffs": 0.085420178975875},
            "overhead_lat": {"mean": 0.000012875000000004203, "squared_diffs": 4.875000000131181e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "split",
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667581", "nanos": 876513000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "35768c6028bb54635cbb2bf1ae5c740a"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW database",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000009, "squared_diffs": 0},
            "plan_lat": {"mean": 0.001421, "squared_diffs": 0},
            "run_lat": {"mean": 0.010901, "squared_diffs": 0},
            "service_lat": {"mean": 0.012348, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.00001700000000000139, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "variable = _"}],
                    "children": [{
                        "name": "virtual table",
                        "attrs": [{"key": "table", "value": "session_variables@primary"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667596", "nanos": 136938000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "ace70b825167b0938a365cadc01b95ff"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS vehicle_location_histories (city VARCHAR NOT NULL, ride_id UUID NOT NULL, \"timestamp\" TIMESTAMP NOT NULL, lat FLOAT8 NULL, long FLOAT8 NULL, PRIMARY KEY (city ASC, ride_id ASC, \"timestamp\" ASC))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000095, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000231, "squared_diffs": 0},
            "run_lat": {"mean": 0.00559, "squared_diffs": 0},
            "service_lat": {"mean": 0.005921, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004999999999999796, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 146252000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "68a700a7db1d58fa6dd4ad85fc89e159"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM crdb_internal.node_build_info WHERE field = _",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "6",
            "first_attempt_count": "6",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0001445, "squared_diffs": 6.48895e-8},
            "plan_lat": {"mean": 0.00015083333333333333, "squared_diffs": 2.9308833333333337e-8},
            "run_lat": {"mean": 0.0001868333333333333, "squared_diffs": 5.478283333333333e-8},
            "service_lat": {"mean": 0.0005106666666666666, "squared_diffs": 3.1572333333333334e-7},
            "overhead_lat": {"mean": 0.000028499999999999995, "squared_diffs": 7.971500000000015e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "field = _"}],
                    "children": [{
                        "name": "virtual table",
                        "attrs": [{"key": "table", "value": "node_build_info@primary"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 945896000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "8425e4f4fb0eeb1911b8c021f8a7bb3e"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS promo_codes (code VARCHAR NOT NULL, description VARCHAR NULL, creation_time TIMESTAMP NULL, expiration_time TIMESTAMP NULL, rules JSONB NULL, PRIMARY KEY (code ASC))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000098, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000307, "squared_diffs": 0},
            "run_lat": {"mean": 0.008115, "squared_diffs": 0},
            "service_lat": {"mean": 0.008526, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000006000000000000796, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 158667000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "aec0ff619f6a54e1216657244f59ab34"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE DATABASE movr",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000981, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000075, "squared_diffs": 0},
            "run_lat": {"mean": 0.006037, "squared_diffs": 0},
            "service_lat": {"mean": 0.007401, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.00030799999999999925, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create database"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 57616000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "a69534607db98c7ec45f7a0b6fe0be02"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE TABLE IF NOT EXISTS users (id UUID NOT NULL, city VARCHAR NOT NULL, name VARCHAR NULL, address VARCHAR NULL, credit_card VARCHAR NULL, PRIMARY KEY (city ASC, id ASC))",
                "app": "$ cockroach demo",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000104, "squared_diffs": 0},
            "plan_lat": {"mean": 0.014865, "squared_diffs": 0},
            "run_lat": {"mean": 0.015255, "squared_diffs": 0},
            "service_lat": {"mean": 0.030236, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000011999999999998123, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create table"},
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 98236000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "316348494c2dd7388ad0c296c6032ead"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT expiration FROM sqlliveness WHERE session_id = $1",
                "app": "$ internal-fetch-single-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002084, "squared_diffs": 0},
            "run_lat": {"mean": 0.001143, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.851545, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "sqlliveness@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 656502000}
            },
            "bytes_read": {"mean": 61, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9a4ec88da078e95b5b4cd98b9cf4e520"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT s.city, s.rider_id, s.id FROM (SELECT city, rider_id, id FROM [55 AS src]@{IGNORE_FOREIGN_KEYS} WHERE (city IS NOT NULL) AND (rider_id IS NOT NULL)) AS s LEFT JOIN (SELECT * FROM [53 AS target]) AS t ON (s.city = t.city) AND (s.rider_id = t.id) WHERE t.city IS NULL LIMIT _",
                "app": "$ internal-validate fk constraint",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000204, "squared_diffs": 0},
            "plan_lat": {"mean": 0.045692, "squared_diffs": 0},
            "run_lat": {"mean": 0.013027, "squared_diffs": 0},
            "service_lat": {"mean": 0.058929, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000005999999999999062, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "city IS NULL"}],
                        "children": [{
                            "name": "lookup join (left outer)",
                            "attrs": [{"key": "table", "value": "users@primary"}, {
                                "key": "equality",
                                "value": "(city, rider_id) = (city,id)"
                            }, {"key": "equality cols are key", "value": ""}],
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "rider_id IS NOT NULL"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "rides@rides_auto_index_fk_city_ref_users"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667590", "nanos": 548243000}
            },
            "bytes_read": {"mean": 50554, "squared_diffs": 0},
            "rows_read": {"mean": 550, "squared_diffs": 0}
        }, "id": "2f4357e36545aeb8e37cf9b93bd9ac90"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT s.vehicle_city, s.vehicle_id, s.city, s.id FROM (SELECT vehicle_city, vehicle_id, city, id FROM [55 AS src]@{IGNORE_FOREIGN_KEYS} WHERE (vehicle_city IS NOT NULL) AND (vehicle_id IS NOT NULL)) AS s LEFT JOIN (SELECT * FROM [54 AS target]) AS t ON (s.vehicle_city = t.city) AND (s.vehicle_id = t.id) WHERE t.city IS NULL LIMIT _",
                "app": "$ internal-validate fk constraint",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000152, "squared_diffs": 0},
            "plan_lat": {"mean": 0.001566, "squared_diffs": 0},
            "run_lat": {"mean": 0.124272, "squared_diffs": 0},
            "service_lat": {"mean": 0.125995, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000050000000000050004, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "city IS NULL"}],
                        "children": [{
                            "name": "lookup join (left outer)",
                            "attrs": [{"key": "table", "value": "vehicles@primary"}, {
                                "key": "equality",
                                "value": "(vehicle_city, vehicle_id) = (city,id)"
                            }, {"key": "equality cols are key", "value": ""}],
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "vehicle_id IS NOT NULL"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "rides@rides_auto_index_fk_vehicle_city_ref_vehicles"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667591", "nanos": 755163000}
            },
            "bytes_read": {"mean": 52719, "squared_diffs": 0},
            "rows_read": {"mean": 515, "squared_diffs": 0}
        }, "id": "df36f1239f5437a5fff4899416584c7a"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT s.city, s.ride_id, s.timestamp FROM (SELECT city, ride_id, \"timestamp\" FROM [56 AS src]@{IGNORE_FOREIGN_KEYS} WHERE (city IS NOT NULL) AND (ride_id IS NOT NULL)) AS s LEFT JOIN (SELECT * FROM [55 AS target]) AS t ON (s.city = t.city) AND (s.ride_id = t.id) WHERE t.city IS NULL LIMIT _",
                "app": "$ internal-validate fk constraint",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00017, "squared_diffs": 0},
            "plan_lat": {"mean": 0.001689, "squared_diffs": 0},
            "run_lat": {"mean": 0.025098, "squared_diffs": 0},
            "service_lat": {"mean": 0.026961, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "city IS NULL"}],
                        "children": [{
                            "name": "lookup join (left outer)",
                            "attrs": [{"key": "table", "value": "rides@primary"}, {
                                "key": "equality",
                                "value": "(city, ride_id) = (city,id)"
                            }, {"key": "equality cols are key", "value": ""}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "vehicle_location_histories@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667592", "nanos": 333569000}
            },
            "bytes_read": {"mean": 167947, "squared_diffs": 0},
            "rows_read": {"mean": 1430, "squared_diffs": 0}
        }, "id": "c2af9536a75fc087b226a34b537801cf"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT s.city, s.user_id, s.code FROM (SELECT city, user_id, code FROM [58 AS src]@{IGNORE_FOREIGN_KEYS} WHERE (city IS NOT NULL) AND (user_id IS NOT NULL)) AS s LEFT JOIN (SELECT * FROM [53 AS target]) AS t ON (s.city = t.city) AND (s.user_id = t.id) WHERE t.city IS NULL LIMIT _",
                "app": "$ internal-validate fk constraint",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000188, "squared_diffs": 0},
            "plan_lat": {"mean": 0.057722, "squared_diffs": 0},
            "run_lat": {"mean": 0.001085, "squared_diffs": 0},
            "service_lat": {"mean": 0.059, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004999999999991123, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "city IS NULL"}],
                        "children": [{
                            "name": "lookup join (left outer)",
                            "attrs": [{"key": "table", "value": "users@primary"}, {
                                "key": "equality",
                                "value": "(city, user_id) = (city,id)"
                            }, {"key": "equality cols are key", "value": ""}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "user_promo_codes@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667595", "nanos": 699028000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "61b244cc5064af33e19ae9fce3ec098f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT s.city, s.owner_id, s.id FROM (SELECT city, owner_id, id FROM [54 AS src]@{IGNORE_FOREIGN_KEYS} WHERE (city IS NOT NULL) AND (owner_id IS NOT NULL)) AS s LEFT JOIN (SELECT * FROM [53 AS target]) AS t ON (s.city = t.city) AND (s.owner_id = t.id) WHERE t.city IS NULL LIMIT _",
                "app": "$ internal-validate fk constraint",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00077, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002199, "squared_diffs": 0},
            "run_lat": {"mean": 0.016349, "squared_diffs": 0},
            "service_lat": {"mean": 0.01933, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000012000000000001593, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "city IS NULL"}],
                        "children": [{
                            "name": "lookup join (left outer)",
                            "attrs": [{"key": "table", "value": "users@primary"}, {
                                "key": "equality",
                                "value": "(city, owner_id) = (city,id)"
                            }, {"key": "equality cols are key", "value": ""}],
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "owner_id IS NOT NULL"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "vehicles@vehicles_auto_index_fk_city_ref_users"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667589", "nanos": 660836000}
            },
            "bytes_read": {"mean": 3125, "squared_diffs": 0},
            "rows_read": {"mean": 30, "squared_diffs": 0}
        }, "id": "5aee4fd5d495d4ddb2c360756adc91d5"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT payload, progress, created_by_type, created_by_id FROM system.jobs WHERE id = $1",
                "app": "$ internal-load-job-query",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "12",
            "first_attempt_count": "12",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007738500000000001, "squared_diffs": 0.0007105474709999999},
            "run_lat": {"mean": 0.0008670833333333332, "squared_diffs": 4.469189166666665e-7},
            "service_lat": {"mean": -9223372036.846165, "squared_diffs": 0.0007385087155853398},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.0913936421275139e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "jobs@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667589", "nanos": 949230000}
            },
            "bytes_read": {"mean": 454.0833333333333, "squared_diffs": 2317078.9166666665},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "6f1da718fe2846931ef56339fbed481c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, payload FROM system.jobs WHERE status IN ($1, $2, __more1__) ORDER BY created",
                "app": "$ internal-get-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "12",
            "first_attempt_count": "12",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0082195, "squared_diffs": 0.00013013591699999997},
            "run_lat": {"mean": 0.0014975, "squared_diffs": 0.000006001413},
            "service_lat": {"mean": -9223372036.845055, "squared_diffs": 0.00014847395141259767},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.1827872842550278e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "sort",
                    "attrs": [{"key": "order", "value": "+created"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "3 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667632", "nanos": 721411000}
            },
            "bytes_read": {"mean": 598.75, "squared_diffs": 4735704.25},
            "rows_read": {"mean": 1, "squared_diffs": 12}
        }, "id": "f9e2db938752287210b375012785d9b6"
    }, {
        "key": {
            "key_data": {
                "query": "SET CLUSTER SETTING version = $1",
                "app": "$ internal-set-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000045, "squared_diffs": 0},
            "run_lat": {"mean": 0.008702, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.846025, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set cluster setting"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 726617000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "566fbc00f5ce45a49c1ee7994fadcb3f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"tableID\", \"statisticID\", name, \"columnIDs\", \"createdAt\", \"rowCount\", \"distinctCount\", \"nullCount\", histogram FROM system.table_statistics WHERE \"tableID\" = $1 ORDER BY \"createdAt\" DESC",
                "app": "$ internal-get-table-statistics",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "12",
            "first_attempt_count": "12",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02380241666666667, "squared_diffs": 0.03771140565291667},
            "run_lat": {"mean": 0.0021703333333333336, "squared_diffs": 0.000031176182666666665},
            "service_lat": {"mean": -9223372036.828802, "squared_diffs": 0.039282180561713176},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 2.9103830456733704e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "sort",
                    "attrs": [{"key": "order", "value": "-\"createdAt\""}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "table_statistics@primary"
                        }, {"key": "spans", "value": "1 span"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667574", "nanos": 212308000}
            },
            "bytes_read": {"mean": 3420.166666666667, "squared_diffs": 316612595.6666667},
            "rows_read": {"mean": 4, "squared_diffs": 236}
        },
        "id": "bae1f5c2a833a25d49d464776a7c3347"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.jobs(id, status, payload, progress, claim_session_id, claim_instance_id) VALUES ($1, $2, __more4__)",
                "app": "$ internal-job-row-insert",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "16",
            "first_attempt_count": "16",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.04319637500000001, "squared_diffs": 0.32061578279975006},
            "run_lat": {"mean": 0.0021081875, "squared_diffs": 0.0000163306224375},
            "service_lat": {"mean": -9223372036.809467, "squared_diffs": 0.3243621405235899},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 5.820766091346741e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "jobs(id, status, created, payload, progress, created_by_type, created_by_id, claim_session_id, claim_instance_id)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "9 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 431848000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "36da1b2628a09feef5f89e7ac55a3d1e"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [54] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000294, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000065, "squared_diffs": 0},
            "run_lat": {"mean": 0.727429, "squared_diffs": 0},
            "service_lat": {"mean": 0.727791, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999752447, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667637", "nanos": 664491000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "75331203235f4f43f1afd9d5f847cb0e"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [53] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.001238, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000087, "squared_diffs": 0},
            "run_lat": {"mean": 1.398501, "squared_diffs": 0},
            "service_lat": {"mean": 1.3998300000000001, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000115023, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 96115000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "fdc86dd6fe36d449ecb0524bd3708f7f"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [58] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000274, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000057, "squared_diffs": 0},
            "run_lat": {"mean": 0.686518, "squared_diffs": 0},
            "service_lat": {"mean": 0.686852, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000003000000000086267, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667634", "nanos": 783277000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4d0fda79b2369160406fd72a69aa92c2"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [56] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000051, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000035, "squared_diffs": 0},
            "run_lat": {"mean": 0.512352, "squared_diffs": 0},
            "service_lat": {"mean": 0.51244, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000001999999999946489, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667635", "nanos": 295957000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "f648758dc5421a02a388e9b5f6a4cfa0"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [57] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000063, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000044, "squared_diffs": 0},
            "run_lat": {"mean": 0.516173, "squared_diffs": 0},
            "service_lat": {"mean": 0.516282, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000020000000000575113, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667635", "nanos": 812872000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "f03c075785c82381f9e7bfbdd7974c63"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE STATISTICS __auto__ FROM [55] WITH OPTIONS THROTTLING 0.9 AS OF SYSTEM TIME _",
                "app": "$ internal-create-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000062, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000388, "squared_diffs": 0},
            "run_lat": {"mean": 1.122768, "squared_diffs": 0},
            "service_lat": {"mean": 1.123221, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000029999999999752447, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create statistics"},
                "most_recent_plan_timestamp": {"seconds": "1599667636", "nanos": 936386000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "f5dd985d38b4b72bd49da20818d63951"
    }, {
        "key": {
            "key_data": {
                "query": "DELETE FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (\"columnIDs\" = $3)) AND (\"statisticID\" NOT IN (SELECT \"statisticID\" FROM system.table_statistics WHERE ((\"tableID\" = $1) AND (name = $2)) AND (\"columnIDs\" = $3) ORDER BY \"createdAt\" DESC LIMIT $4))",
                "app": "$ internal-delete-statistics",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "19",
            "first_attempt_count": "19",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.024285157894736842, "squared_diffs": 0.006319239778526315},
            "run_lat": {"mean": 0.0040863157894736836, "squared_diffs": 0.0001816251701052631},
            "service_lat": {"mean": -9223372036.826399, "squared_diffs": 0.00794484566358733},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 9.822542779147625e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "delete",
                    "attrs": [{"key": "from", "value": "table_statistics"}],
                    "children": [{
                        "name": "merge join (anti)",
                        "attrs": [{
                            "key": "equality",
                            "value": "(statisticID) = (statisticID)"
                        }, {"key": "left cols are key", "value": ""}, {"key": "right cols are key", "value": ""}],
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "\"columnIDs\" = _"}],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "table_statistics@primary"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }, {
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "+\"statisticID\""}],
                            "children": [{
                                "name": "limit",
                                "attrs": [{"key": "count", "value": "_"}],
                                "children": [{
                                    "name": "sort",
                                    "attrs": [{"key": "order", "value": "-\"createdAt\""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "(name = _) AND (\"columnIDs\" = _)"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "table_statistics@primary"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667632", "nanos": 937376000}
            },
            "bytes_read": {"mean": 13651.052631578948, "squared_diffs": 1890906970.9473684},
            "rows_read": {"mean": 9.789473684210526, "squared_diffs": 999.1578947368421}
        }, "id": "a958395dbc6e7181b57c38e55ee60583"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
                "app": "$ internal-scheduler-stats",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "43",
            "first_attempt_count": "43",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0018306279069767442, "squared_diffs": 0.0025023169820465115},
            "plan_lat": {"mean": 0.05111476744186046, "squared_diffs": 0.9872799030196745},
            "run_lat": {"mean": 0.005587860465116278, "squared_diffs": 0.00537350019316279},
            "service_lat": {"mean": 0.058538651162790695, "squared_diffs": 1.2293759493617675},
            "overhead_lat": {"mean": 0.00000539534883720639, "squared_diffs": 3.7627906976691923e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "", "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "values",
                        "attrs": [{"key": "size", "value": "2 columns, 1 row"}]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "scheduled_jobs@next_run_idx"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S2"}, {
                            "key": "original sql",
                            "value": "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))"
                        }, {"key": "exec mode", "value": "one row"}],
                        "children": [{
                            "name": "group (scalar)",
                            "children": [{
                                "name": "filter",
                                "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }]
                        }]
                    }]
                }, "most_recent_plan_timestamp": {"seconds": "1599670218", "nanos": 27834000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "34b9049be361a657482c2ab00f9df826"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
                "app": "$ internal-cancel/pause-requested",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.025592273381294963, "squared_diffs": 4.034606062191223},
            "run_lat": {"mean": 0.0054956762589928035, "squared_diffs": 0.18229400438086327},
            "service_lat": {"mean": -9223372036.823689, "squared_diffs": 5.176736062479904},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 3.041350282728672e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                            "children": [{
                                "name": "index join",
                                "attrs": [{"key": "table", "value": "jobs@primary"}],
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "jobs@jobs_status_created_idx"
                                    }, {"key": "spans", "value": "2 spans"}]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 434405000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "d811d568dba86ead95ca527139663dbc"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.users(username, \"hashedPassword\", \"isRole\") VALUES ($1, _, __more1__)",
                "app": "$ internal-addAdminRole",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000414, "squared_diffs": 0},
            "run_lat": {"mean": 0.00041, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.85395, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{
                        "key": "into",
                        "value": "users(username, hashedPassword, isRole)"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "3 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 730842000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "52082de22327015c1c11f6ccefe0770f"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.settings(name, value, \"lastUpdated\", \"valueType\") SELECT _, value, \"lastUpdated\", \"valueType\" FROM system.settings WHERE name = _ ON CONFLICT (name) DO NOTHING",
                "app": "$ internal-copy-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "2",
            "first_attempt_count": "2",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00010949999999999999, "squared_diffs": 8.404999999999997e-10},
            "plan_lat": {"mean": 0.00228, "squared_diffs": 1.1520000000000039e-9},
            "run_lat": {"mean": 0.0005110000000000001, "squared_diffs": 2.88e-8},
            "service_lat": {"mean": 0.002904, "squared_diffs": 3.075199999999999e-8},
            "overhead_lat": {"mean": 0.000003499999999999814, "squared_diffs": 4.999999999996991e-13},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "settings(name, value, lastUpdated, valueType)"
                    }, {"key": "auto commit", "value": ""}, {"key": "arbiter indexes", "value": "primary"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "name IS NULL"}],
                        "children": [{
                            "name": "cross join (left outer)",
                            "children": [{
                                "name": "render",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "settings@primary"
                                    }, {"key": "spans", "value": "1 span"}]
                                }]
                            }, {
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "settings@primary"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 759756000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c81ca81beaa4460c0672f051344b137c"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.settings(name, value, \"lastUpdated\", \"valueType\") VALUES (_, _, now(), _) ON CONFLICT (name) DO NOTHING",
                "app": "$ internal-insert-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000108, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00406, "squared_diffs": 0},
            "run_lat": {"mean": 0.002693, "squared_diffs": 0},
            "service_lat": {"mean": 0.006865, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000039999999999996635, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "settings(name, value, lastUpdated, valueType)"
                    }, {"key": "auto commit", "value": ""}, {"key": "arbiter indexes", "value": "primary"}],
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "name IS NULL"}],
                        "children": [{
                            "name": "cross join (left outer)",
                            "children": [{
                                "name": "values",
                                "attrs": [{"key": "size", "value": "4 columns, 1 row"}]
                            }, {
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "settings@primary"
                                }, {"key": "spans", "value": "1 span"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 716972000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "42c56dcc4a6277a6cf845353514fba1b"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-retrieve-prev-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000458, "squared_diffs": 0},
            "run_lat": {"mean": 0.000176, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.854141, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 720377000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT table_id FROM crdb_internal.tables AS OF SYSTEM TIME _ WHERE (schema_name = _) AND (drop_time IS NULL)",
                "app": "$ internal-get-tables",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000374, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009597, "squared_diffs": 0},
            "run_lat": {"mean": 0.016058, "squared_diffs": 0},
            "service_lat": {"mean": 0.026033, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000004, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(schema_name = _) AND (drop_time IS NULL)"}],
                    "children": [{"name": "virtual table", "attrs": [{"key": "table", "value": "tables@primary"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 749944000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e5d4ed525af22adc3ef8d5c499c1fed2"
    }, {
        "key": {
            "key_data": {
                "query": "DELETE FROM system.public.lease WHERE (\"descID\", version, \"nodeID\", expiration) = ($1, $2, __more2__)",
                "app": "$ internal-lease-release",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "170",
            "first_attempt_count": "170",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01491492941176471, "squared_diffs": 0.319014323445153},
            "run_lat": {"mean": 0.018148194117647058, "squared_diffs": 0.37852610244459417},
            "service_lat": {"mean": -9223372036.82171, "squared_diffs": 1.2940927657182328},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 5.893525667488575e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "delete range",
                    "attrs": [{"key": "from", "value": "lease"}, {"key": "auto commit", "value": ""}, {
                        "key": "spans",
                        "value": "1 span"
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670110", "nanos": 422458000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "48aba7688095051c9bc012682c580546"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT status, payload, progress, crdb_internal.sql_liveness_is_alive(claim_session_id) FROM system.jobs WHERE (id = $1) AND (claim_session_id = $2)",
                "app": "$ internal-get-job-row",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "10",
            "first_attempt_count": "10",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.015228400000000001, "squared_diffs": 0.003996698712400001},
            "run_lat": {"mean": 0.005502199999999999, "squared_diffs": 0.0006514213995999998},
            "service_lat": {"mean": -9223372036.83404, "squared_diffs": 0.004865240116487257},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.0913936421275139e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "filter",
                        "attrs": [{"key": "filter", "value": "claim_session_id = _"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 662340000}
            },
            "bytes_read": {"mean": 299.2, "squared_diffs": 1333.5999999999985},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "9c518eeb3103bac03991cac4cc41a54e"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
                "app": "$ internal-stmt-diag-poll",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "280",
            "first_attempt_count": "280",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.004725192857142859, "squared_diffs": 1.550852118203586},
            "plan_lat": {"mean": 0.05618616428571429, "squared_diffs": 91.17928279089044},
            "run_lat": {"mean": 0.0038495071428571418, "squared_diffs": 0.34820607176998575},
            "service_lat": {"mean": 0.064767, "squared_diffs": 129.14535297007797},
            "overhead_lat": {"mean": 0.0000061357142857133555, "squared_diffs": 9.871684285714091e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@completed_idx"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670284", "nanos": 606957000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "78f0b0a068bd21b9338f3ff9ac608c04"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO sqlliveness VALUES ($1, $2)",
                "app": "$ internal-insert-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000766, "squared_diffs": 0},
            "run_lat": {"mean": 0.001508, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.852493, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "sqlliveness(session_id, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "2 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 695322000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "4abfd92e13ab155ec79c72a1ca21a875"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET claim_session_id = _ WHERE (claim_session_id != $1) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))",
                "app": "$ internal-expire-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "278",
            "first_attempt_count": "278",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02193045683453237, "squared_diffs": 6.490423977288982},
            "run_lat": {"mean": 0.00339971582733813, "squared_diffs": 0.03501838742855039},
            "service_lat": {"mean": -9223372036.82944, "squared_diffs": 6.989666630248394},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.0550138540565968e-8},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {
                        "key": "set",
                        "value": "claim_session_id"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "filter",
                            "attrs": [{
                                "key": "filter",
                                "value": "(claim_session_id != _) AND (NOT crdb_internal.sql_liveness_is_alive(claim_session_id))"
                            }],
                            "children": [{
                                "name": "scan",
                                "attrs": [{"key": "missing stats", "value": ""}, {
                                    "key": "table",
                                    "value": "jobs@primary"
                                }, {"key": "spans", "value": "FULL SCAN"}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670292", "nanos": 421295000}
            },
            "bytes_read": {"mean": 10613.575539568346, "squared_diffs": 490478897.91366917},
            "rows_read": {"mean": 15.776978417266191, "squared_diffs": 686.1726618705043}
        }, "id": "2c0e312e03a1f60189d401538a8501c9"
    }, {
        "key": {
            "key_data": {
                "query": "SET CLUSTER SETTING \"cluster.secret\" = gen_random_uuid()::STRING",
                "app": "$ internal-initializeClusterSecret",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000037, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00006, "squared_diffs": 0},
            "run_lat": {"mean": 0.005901, "squared_diffs": 0},
            "service_lat": {"mean": 0.005999, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000010000000000001327, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set cluster setting"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 743891000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "11e0b212cfcfc6524d5d2f6961927168"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
                "app": "$ internal-update-session",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "554",
            "first_attempt_count": "554",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01409592418772564, "squared_diffs": 8.130659693188816},
            "run_lat": {"mean": 0.012627940433213, "squared_diffs": 3.7661380766050327},
            "service_lat": {"mean": -9223372036.828035, "squared_diffs": 15.566620529123611},
            "overhead_lat": {"mean": -9223372036.854694, "squared_diffs": 0.00005062693526269868},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "sqlliveness"}, {"key": "set", "value": "expiration"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "sqlliveness@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670299", "nanos": 533189000}
            },
            "bytes_read": {"mean": 61.07220216606499, "squared_diffs": 157.11191335740077},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "ee9a7d600a2e2051e61f0b4c9192024c"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET progress = $2 WHERE id = $1",
                "app": "$ internal-job-update",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "24",
            "first_attempt_count": "24",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.008533124999999999, "squared_diffs": 0.0018924028826249998},
            "run_lat": {"mean": 0.0032254583333333336, "squared_diffs": 0.00012677079395833336},
            "service_lat": {"mean": -9223372036.843014, "squared_diffs": 0.00212238248786889},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.4551915228366852e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "progress"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 734710000}
            },
            "bytes_read": {"mean": 453.9583333333333, "squared_diffs": 4655104.958333334},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "7a0119ec573c6d511a0b65e1ea41e25d"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = $2, payload = $3, progress = $4 WHERE id = $1",
                "app": "$ internal-job-update",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "16",
            "first_attempt_count": "16",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0060698125, "squared_diffs": 0.0001331488384375},
            "run_lat": {"mean": 0.0045705625, "squared_diffs": 0.00015841090593749998},
            "service_lat": {"mean": -9223372036.844131, "squared_diffs": 0.00041079627044382505},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 1.8189894035458565e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status, payload, progress"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 753414000}
            },
            "bytes_read": {"mean": 603.875, "squared_diffs": 3768791.7500000005},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "4fbe5e5902ed5f1fc1875a6a53821ad6"
    }, {
        "key": {
            "key_data": {
                "query": "UPDATE system.jobs SET status = $2, payload = $3 WHERE id = $1",
                "app": "$ internal-job-update",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "6",
            "first_attempt_count": "6",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01647816666666667, "squared_diffs": 0.0007528252208333335},
            "run_lat": {"mean": 0.0021755000000000004, "squared_diffs": 8.952775000000005e-7},
            "service_lat": {"mean": -9223372036.836117, "squared_diffs": 0.0007405086689686868},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 6.184563972055912e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "update",
                    "attrs": [{"key": "table", "value": "jobs"}, {"key": "set", "value": "status, payload"}],
                    "children": [{
                        "name": "render",
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667632", "nanos": 778259000}
            },
            "bytes_read": {"mean": 1131.8333333333335, "squared_diffs": 434862.83333333326},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        }, "id": "3835a6357cf0fa05a9c8bf29de1ecdc6"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
                "app": "$ internal-select-running/get-claimed-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "98",
            "first_attempt_count": "98",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.02615692857142857, "squared_diffs": 2.9746867823145},
            "run_lat": {"mean": 0.00322377551020408, "squared_diffs": 0.015435254549061223},
            "service_lat": {"mean": -9223372036.825392, "squared_diffs": 3.158289126087766},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 4.343746695667505e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "(claim_session_id = _) AND (claim_instance_id = _)"}],
                    "children": [{
                        "name": "index join",
                        "attrs": [{"key": "table", "value": "jobs@primary"}],
                        "children": [{
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "jobs@jobs_status_created_idx"
                            }, {"key": "spans", "value": "2 spans"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670322", "nanos": 179858000}
            },
            "bytes_read": {"mean": 42.632653061224495, "squared_diffs": 2924470.775510203},
            "rows_read": {"mean": 0.22448979591836735, "squared_diffs": 79.0612244897959}
        }, "id": "1a9ac8a7bccdae29de627d49342627a0"
    }, {
        "key": {
            "key_data": {
                "query": "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
                "app": "$ internal-delete-sessions",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "139",
            "first_attempt_count": "139",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00917741726618705, "squared_diffs": 0.2986471110157985},
            "run_lat": {"mean": 0.037060453237410064, "squared_diffs": 16.724423217304444},
            "service_lat": {"mean": -9223372036.808533, "squared_diffs": 21.237970336682338},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 7.690687198191881e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "root",
                    "children": [{
                        "name": "group (scalar)",
                        "children": [{
                            "name": "scan buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}]
                        }]
                    }, {
                        "name": "subquery",
                        "attrs": [{"key": "id", "value": "@S1"}, {
                            "key": "original sql",
                            "value": "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id"
                        }, {"key": "exec mode", "value": "all rows"}],
                        "children": [{
                            "name": "buffer",
                            "attrs": [{"key": "label", "value": "buffer 1 (deleted_sessions)"}],
                            "children": [{
                                "name": "delete",
                                "attrs": [{"key": "from", "value": "sqlliveness"}],
                                "children": [{
                                    "name": "filter",
                                    "attrs": [{"key": "filter", "value": "expiration < _"}],
                                    "children": [{
                                        "name": "scan",
                                        "attrs": [{"key": "missing stats", "value": ""}, {
                                            "key": "table",
                                            "value": "sqlliveness@primary"
                                        }, {"key": "spans", "value": "FULL SCAN"}]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670377", "nanos": 951092000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "c3e39d9bc4b85cd1af18c2fc49e1bf7b"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.eventlog(\"timestamp\", \"eventType\", \"targetID\", \"reportingID\", info) VALUES (now(), $1, $2, $3, $4)",
                "app": "$ internal-log-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "25",
            "first_attempt_count": "25",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00377172, "squared_diffs": 0.00048793666504},
            "run_lat": {"mean": 0.0016177199999999998, "squared_diffs": 0.000026486755040000005},
            "service_lat": {"mean": -9223372036.849382, "squared_diffs": 0.0006374184486048762},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 5.4569682106375694e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "eventlog(timestamp, eventType, targetID, reportingID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "6 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 702846000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6681af81b67a5e62aaa12c3aa6f50239"
    }, {
        "key": {
            "key_data": {
                "query": "SHOW CLUSTER SETTING version",
                "app": "$ internal-show-version",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000533, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000236, "squared_diffs": 0},
            "run_lat": {"mean": 0.008534, "squared_diffs": 0},
            "service_lat": {"mean": 0.009308, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004999999999999796, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "show"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 800675000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "60d2c10043884cb136674a449007bc52"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT \"descID\", version, expiration FROM system.public.lease AS OF SYSTEM TIME _ WHERE \"nodeID\" = _",
                "app": "$ internal-read orphaned leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.001222, "squared_diffs": 0},
            "plan_lat": {"mean": 0.006083, "squared_diffs": 0},
            "run_lat": {"mean": 0.000382, "squared_diffs": 0},
            "service_lat": {"mean": 0.007692, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004999999999999796, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "filter",
                    "attrs": [{"key": "filter", "value": "\"nodeID\" = _"}],
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 799957000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "406becfb66886cd8448f5b5ea3875f46"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(*) FROM system.locations",
                "app": "$ internal-update-system-locations",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000133, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002235, "squared_diffs": 0},
            "run_lat": {"mean": 0.000865, "squared_diffs": 0},
            "service_lat": {"mean": 0.003237, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000004000000000000097, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "group (scalar)",
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "locations@primary"
                        }, {"key": "spans", "value": "FULL SCAN"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 767020000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "0f83e47dd485be14b8d44ad524bad8c4"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.locations VALUES ($1, $2, __more2__)",
                "app": "$ internal-update-system-locations",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "5",
            "first_attempt_count": "5",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0009582000000000001, "squared_diffs": 1.255388e-7},
            "run_lat": {"mean": 0.0008978, "squared_diffs": 0.0000031501167999999992},
            "service_lat": {"mean": -9223372036.852917, "squared_diffs": 0.000002785025571938604},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 7.275957614183426e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{
                        "key": "into",
                        "value": "locations(localityKey, localityValue, latitude, longitude)"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "4 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 769842000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "14e49f3600e9c058f730eb296693089e"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT value FROM system.settings WHERE name = $1",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000668, "squared_diffs": 0},
            "run_lat": {"mean": 0.000214, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.853891, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 800474000}
            },
            "bytes_read": {"mean": 62, "squared_diffs": 0},
            "rows_read": {"mean": 1, "squared_diffs": 0}
        },
        "id": "2e2862ea1d80e4dadeb820ec71e3fac2"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT name FROM system.settings",
                "app": "$ internal-read-setting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000075, "squared_diffs": 0},
            "plan_lat": {"mean": 0.190933, "squared_diffs": 0},
            "run_lat": {"mean": 0.003707, "squared_diffs": 0},
            "service_lat": {"mean": 0.194718, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000003000000000030756, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "settings@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667579", "nanos": 72818000}
            },
            "bytes_read": {"mean": 417, "squared_diffs": 0},
            "rows_read": {"mean": 5, "squared_diffs": 0}
        },
        "id": "71a3d6d05888b6271ea3b905a246681c"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(_) FROM system.public.lease AS OF SYSTEM TIME _ WHERE (((\"descID\" = _) AND (version = _)) AND (expiration > $1))",
                "app": "$ internal-count-leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "59",
            "first_attempt_count": "59",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.007900661016949152, "squared_diffs": 0.05844059905722035},
            "run_lat": {"mean": 0.0020455423728813556, "squared_diffs": 0.0010470939546440676},
            "service_lat": {"mean": -9223372036.844822, "squared_diffs": 0.06530756425127038},
            "overhead_lat": {"mean": -9223372036.854767, "squared_diffs": 7.366907084360719e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "group (scalar)",
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "1 span"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 697229000}
            },
            "bytes_read": {"mean": 9.491525423728813, "squared_diffs": 17084.745762711864},
            "rows_read": {"mean": 0.23728813559322032, "squared_diffs": 10.677966101694917}
        },
        "id": "64509715caa3bf9887be6f427f118d3e"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT count(_) FROM system.public.lease AS OF SYSTEM TIME _ WHERE (((\"descID\" = _) AND (version = _)) AND (expiration > $1)) OR (((\"descID\" = _) AND (version = _)) AND (expiration > $1))",
                "app": "$ internal-count-leases",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "5",
            "first_attempt_count": "5",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.0025826, "squared_diffs": 0.0000088130072},
            "run_lat": {"mean": 0.0008858000000000001, "squared_diffs": 9.888079999999995e-8},
            "service_lat": {"mean": -9223372036.851305, "squared_diffs": 0.000010474952432559803},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 3.637978807091713e-12},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "group (scalar)",
                    "children": [{
                        "name": "scan",
                        "attrs": [{"key": "missing stats", "value": ""}, {
                            "key": "table",
                            "value": "lease@primary"
                        }, {"key": "spans", "value": "2 spans"}]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667588", "nanos": 487151000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "0d762c0d9ac8f8f15ecd1ee649e11bd6"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.table_statistics(\"tableID\", name, \"columnIDs\", \"rowCount\", \"distinctCount\", \"nullCount\", histogram) VALUES ($1, $2, __more5__)",
                "app": "$ internal-insert-statistic",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "19",
            "first_attempt_count": "19",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.010322578947368422, "squared_diffs": 0.001718042950631579},
            "run_lat": {"mean": 0.0020583157894736846, "squared_diffs": 0.000016239052105263153},
            "service_lat": {"mean": -9223372036.842392, "squared_diffs": 0.001855988331953995},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.9103830456733704e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "table_statistics(tableID, statisticID, name, columnIDs, createdAt, rowCount, distinctCount, nullCount, histogram)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "9 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667632", "nanos": 955079000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2c0ca7d780730fb06908ef8997701136"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
                "app": "$ internal-find-scheduled-jobs",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "43",
            "first_attempt_count": "43",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0002762558139534884, "squared_diffs": 0.0000026409821860465108},
            "plan_lat": {"mean": 0.06859748837209302, "squared_diffs": 3.423163150470745},
            "run_lat": {"mean": 0.020833209302325573, "squared_diffs": 0.5475015637191163},
            "service_lat": {"mean": 0.08971434883720932, "squared_diffs": 6.67785517261577},
            "overhead_lat": {"mean": 0.000007395348837213269, "squared_diffs": 3.706279069767338e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "limit",
                    "attrs": [{"key": "count", "value": "_"}],
                    "children": [{
                        "name": "sort",
                        "attrs": [{"key": "order", "value": "+column26"}],
                        "children": [{
                            "name": "render",
                            "children": [{
                                "name": "group",
                                "attrs": [{"key": "group by", "value": "schedule_id"}, {
                                    "key": "ordered",
                                    "value": "+schedule_id"
                                }],
                                "children": [{
                                    "name": "merge join (left outer)",
                                    "attrs": [{
                                        "key": "equality",
                                        "value": "(schedule_id) = (created_by_id)"
                                    }, {"key": "left cols are key", "value": ""}],
                                    "children": [{
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "next_run < _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "scheduled_jobs@primary"
                                            }, {"key": "spans", "value": "FULL SCAN"}]
                                        }]
                                    }, {
                                        "name": "filter",
                                        "attrs": [{"key": "filter", "value": "status NOT IN _"}],
                                        "children": [{
                                            "name": "scan",
                                            "attrs": [{"key": "missing stats", "value": ""}, {
                                                "key": "table",
                                                "value": "jobs@jobs_created_by_type_created_by_id_idx"
                                            }, {"key": "spans", "value": "1 span"}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670218", "nanos": 50594000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "71cbdadfbdb36f9d04821805d6e3c396"
    }, {
        "key": {
            "key_data": {
                "query": "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
                "app": "$ internal-protectedts-GetMetadata",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "25",
            "first_attempt_count": "25",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.00075288, "squared_diffs": 0.0000017785386399999998},
            "plan_lat": {"mean": 0.05192592, "squared_diffs": 1.08677595019184},
            "run_lat": {"mean": 0.00585208, "squared_diffs": 0.00957629401784},
            "service_lat": {"mean": 0.05853428000000001, "squared_diffs": 1.3004459751350401},
            "overhead_lat": {"mean": 0.0000034000000000048057, "squared_diffs": 1.800000000015969e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "render",
                    "children": [{
                        "name": "limit",
                        "attrs": [{"key": "count", "value": "_"}],
                        "children": [{
                            "name": "sort",
                            "attrs": [{"key": "order", "value": "-version"}],
                            "children": [{
                                "name": "union all",
                                "children": [{
                                    "name": "scan",
                                    "attrs": [{"key": "missing stats", "value": ""}, {
                                        "key": "table",
                                        "value": "protected_ts_meta@primary"
                                    }, {"key": "spans", "value": "FULL SCAN"}]
                                }, {"name": "values", "attrs": [{"key": "size", "value": "1 column, 1 row"}]}]
                            }]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670093", "nanos": 28246000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "793a6cfb42805e1314bbb53ea8857134"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.role_members(role, member, \"isAdmin\") VALUES ($1, $2, __more1__)",
                "app": "$ internal-addRootToAdminRole",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        }, "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000517, "squared_diffs": 0},
            "run_lat": {"mean": 0.001237, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.85302, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{"key": "into", "value": "role_members(role, member, isAdmin)"}, {
                        "key": "auto commit",
                        "value": ""
                    }, {"key": "arbiter indexes", "value": "primary"}],
                    "children": [{
                        "name": "cross join (left outer)",
                        "children": [{
                            "name": "values",
                            "attrs": [{"key": "size", "value": "3 columns, 1 row"}]
                        }, {
                            "name": "scan",
                            "attrs": [{"key": "missing stats", "value": ""}, {
                                "key": "table",
                                "value": "role_members@primary"
                            }, {"key": "spans", "value": "1 span"}]
                        }]
                    }]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 737579000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        }, "id": "39137de22f6e2384f29c71891ff71671"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.public.lease(\"descID\", version, \"nodeID\", expiration) VALUES (_, _, __more2__)",
                "app": "$ internal-lease-insert",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "178",
            "first_attempt_count": "178",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0.004104640449438202, "squared_diffs": 0.5073913478469886},
            "plan_lat": {"mean": 0.03299720786516854, "squared_diffs": 3.6434031517413095},
            "run_lat": {"mean": 0.011822966292134833, "squared_diffs": 0.3177199203677978},
            "service_lat": {"mean": 0.04892759550561797, "squared_diffs": 7.996002589278877},
            "overhead_lat": {"mean": 0.000002780898876405713, "squared_diffs": 3.304550561806538e-10},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{"key": "into", "value": "lease(descID, version, nodeID, expiration)"}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "4 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599670110", "nanos": 322489000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "6acb0d249e933b5a93d9dfafea2a55fd"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT key, value, \"lastUpdated\" FROM system.ui WHERE key IN ($1, $2)",
                "app": "$ internal-admin-getUIData",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "5",
            "first_attempt_count": "5",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.009625799999999999, "squared_diffs": 0.0000794146428},
            "run_lat": {"mean": 0.0011430000000000001, "squared_diffs": 0.0000025438360000000003},
            "service_lat": {"mean": -9223372036.844002, "squared_diffs": 0.0000834476413729135},
            "overhead_lat": {"mean": -9223372036.85477, "squared_diffs": 1.0913936421275139e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "ui@primary"
                    }, {"key": "spans", "value": "2 spans"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599668223", "nanos": 852901000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "7ebebbc9d27fdb46adfcd0552249c14a"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE DATABASE IF NOT EXISTS defaultdb",
                "app": "$ internal-create-default-db",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000018, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000392, "squared_diffs": 0},
            "run_lat": {"mean": 0.004581, "squared_diffs": 0},
            "service_lat": {"mean": 0.004993, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000020000000000002655, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create database"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 751073000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "5e08b7593b165b246cd77f412a2f050d"
    }, {
        "key": {
            "key_data": {
                "query": "CREATE DATABASE IF NOT EXISTS postgres",
                "app": "$ internal-create-default-db",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.000023, "squared_diffs": 0},
            "plan_lat": {"mean": 0.00005, "squared_diffs": 0},
            "run_lat": {"mean": 0.002948, "squared_diffs": 0},
            "service_lat": {"mean": 0.003023, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.0000019999999999998318, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "create database"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 755495000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "7ff4a6580666a6c106cbacd84f3f7261"
    }, {
        "key": {
            "key_data": {
                "query": "INSERT INTO system.rangelog(\"timestamp\", \"rangeID\", \"storeID\", \"eventType\", \"otherRangeID\", info) VALUES ($1, $2, __more4__)",
                "app": "$ internal-log-range-event",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": false,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "310",
            "first_attempt_count": "310",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.01201206774193549, "squared_diffs": 0.4515810027195773},
            "run_lat": {"mean": 0.002137829032258063, "squared_diffs": 0.0027362268939387082},
            "service_lat": {"mean": -9223372036.840612, "squared_diffs": 0.46621127502658055},
            "overhead_lat": {"mean": -9223372036.854773, "squared_diffs": 2.35741026699543e-9},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "insert",
                    "attrs": [{
                        "key": "into",
                        "value": "rangelog(timestamp, rangeID, storeID, eventType, otherRangeID, info, uniqueID)"
                    }],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "7 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667573", "nanos": 8272000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "295aff5cd57a427d57e7c1abe16fb0ce"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT id, statement_fingerprint, completed, statement_diagnostics_id, requested_at FROM system.statement_diagnostics_requests",
                "app": "$ internal-stmt-diag-get-all",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "2",
            "first_attempt_count": "2",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.0005304999999999999, "squared_diffs": 2.8125000000000107e-9},
            "plan_lat": {"mean": 0.0104505, "squared_diffs": 5.512500000000097e-9},
            "run_lat": {"mean": 0.001908, "squared_diffs": 8.632980000000001e-7},
            "service_lat": {"mean": 0.0128985, "squared_diffs": 8.411044999999994e-7},
            "overhead_lat": {"mean": 0.00000949999999999996, "squared_diffs": 8.450000000001116e-11},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "statement_diagnostics_requests@primary"
                    }, {"key": "spans", "value": "FULL SCAN"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599668980", "nanos": 739067000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "2f3812037497d01bc867325c68d77383"
    }, {
        "key": {
            "key_data": {
                "query": "SET CLUSTER SETTING \"diagnostics.reporting.enabled\" = _",
                "app": "$ internal-optInToDiagnosticsStatReporting",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0.001158, "squared_diffs": 0},
            "plan_lat": {"mean": 0.002419, "squared_diffs": 0},
            "run_lat": {"mean": 0.010422, "squared_diffs": 0},
            "service_lat": {"mean": 0.014002, "squared_diffs": 0},
            "overhead_lat": {"mean": 0.000002999999999999531, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {"name": "set cluster setting"},
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 709203000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "41ef3c02e91313f5f0bb248cbf96ad7a"
    }, {
        "key": {
            "key_data": {
                "query": "UPSERT INTO system.users(username, \"hashedPassword\", \"isRole\") VALUES ($1, _, __more1__)",
                "app": "$ internal-addRootUser",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 1, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000444, "squared_diffs": 0},
            "run_lat": {"mean": 0.000469, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.85386, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "upsert",
                    "attrs": [{
                        "key": "into",
                        "value": "users(username, hashedPassword, isRole)"
                    }, {"key": "auto commit", "value": ""}],
                    "children": [{"name": "values", "attrs": [{"key": "size", "value": "3 columns, 1 row"}]}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 728817000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "52082de22327015c1c11f6ccefe0770f"
    }, {
        "key": {
            "key_data": {
                "query": "SELECT username, \"isRole\" FROM system.users WHERE username = $1",
                "app": "$ internal-disallowPublicUserOrRole",
                "distSQL": false,
                "failed": false,
                "opt": true,
                "implicit_txn": true,
                "vec": false
            }, "node_id": 1
        },
        "stats": {
            "count": "1",
            "first_attempt_count": "1",
            "max_retries": "0",
            "legacy_last_err": "",
            "num_rows": {"mean": 0, "squared_diffs": 0},
            "parse_lat": {"mean": 0, "squared_diffs": 0},
            "plan_lat": {"mean": 0.000416, "squared_diffs": 0},
            "run_lat": {"mean": 0.000118, "squared_diffs": 0},
            "service_lat": {"mean": -9223372036.85424, "squared_diffs": 0},
            "overhead_lat": {"mean": -9223372036.854774, "squared_diffs": 0},
            "legacy_last_err_redacted": "",
            "sensitive_info": {
                "last_err": "",
                "most_recent_plan_description": {
                    "name": "scan",
                    "attrs": [{"key": "missing stats", "value": ""}, {
                        "key": "table",
                        "value": "users@primary"
                    }, {"key": "spans", "value": "1 span"}]
                },
                "most_recent_plan_timestamp": {"seconds": "1599667572", "nanos": 745701000}
            },
            "bytes_read": {"mean": 0, "squared_diffs": 0},
            "rows_read": {"mean": 0, "squared_diffs": 0}
        },
        "id": "e0852476eb22b1b6ec219e87bf8e0d17"
    }],
    "last_reset": {"seconds": "1599667572", "nanos": 688635000},
    "internal_app_name_prefix": "$ internal",
    "transactions": [{
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.05745331182795698, "squared_diffs": 14.213222686585958},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000010258064516129034, "squared_diffs": 3.1277806451612896e-8}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "281",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.024999483985765122, "squared_diffs": 4.3998952051121805},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000010387900355871875, "squared_diffs": 1.8959871886121012e-7}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.081996, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000011, "squared_diffs": 0}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.027685, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000004, "squared_diffs": 0}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07074643571428572, "squared_diffs": 192.57823989665084},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.066901, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000003, "squared_diffs": 0}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "141",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.04333560992907801, "squared_diffs": 11.010815031621545},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000010248226950354606, "squared_diffs": 5.068431205673761e-8}
            }
        }, "node_id": 5
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10633510071942444, "squared_diffs": 354.59311369326707},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "140",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.08878077142857142, "squared_diffs": 105.5228685349407},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00000877857142857143, "squared_diffs": 5.338135714285717e-9}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06983223571428572, "squared_diffs": 146.70526074151044},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008235714285714293, "squared_diffs": 1.5384442857142857e-8}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07616760215053765, "squared_diffs": 24.541755750924285},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007537634408602149, "squared_diffs": 9.63118279569893e-10}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.042453, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000003, "squared_diffs": 0}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.019478, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000012, "squared_diffs": 0}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.081875, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000018, "squared_diffs": 0}
            }
        }, "node_id": 4
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06317246071428571, "squared_diffs": 103.6464387803516},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00000816428571428572, "squared_diffs": 5.416442857142856e-9}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.019402, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000011, "squared_diffs": 0}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.025976, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000003, "squared_diffs": 0}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "139",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06520202877697842, "squared_diffs": 33.27466875750188},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008676258992805753, "squared_diffs": 4.334431654676259e-9}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.059580623655913975, "squared_diffs": 15.39612049028583},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00000774193548387097, "squared_diffs": 2.2618064516129023e-9}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.007945, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006, "squared_diffs": 0}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "279",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10534012186379929, "squared_diffs": 332.9990036009119},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 7
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.011544, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000004, "squared_diffs": 0}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.025494, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000004, "squared_diffs": 0}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.09976906834532376, "squared_diffs": 313.7733484837637},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.165386, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000011, "squared_diffs": 0}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "137",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.18978834306569342, "squared_diffs": 290.6796595888909},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00000927007299270073, "squared_diffs": 4.693007299270071e-9}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07798623655913978, "squared_diffs": 22.9143099772468},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009537634408602153, "squared_diffs": 2.1133118279569904e-8}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07565122142857142, "squared_diffs": 172.99635154955826},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008821428571428569, "squared_diffs": 5.5631071428571424e-8}
            }
        }, "node_id": 3
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.077068, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000004, "squared_diffs": 0}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.015862, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000005, "squared_diffs": 0}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07936894623655914, "squared_diffs": 29.46105908624073},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007612903225806455, "squared_diffs": 1.178064516129032e-9}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10374648920863308, "squared_diffs": 253.4826806387895},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "141",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10888338297872338, "squared_diffs": 44.98696872227332},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009539007092198583, "squared_diffs": 2.1441035460992895e-8}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06844061785714282, "squared_diffs": 164.92139383198213},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007400000000000001, "squared_diffs": 2.885199999999997e-9}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.056886, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 9
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.180118, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000332, "squared_diffs": 0}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "279",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10533340501792116, "squared_diffs": 353.83130658566324},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.023028, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006, "squared_diffs": 0}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0780278064516129, "squared_diffs": 23.669014441744515},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008967741935483871, "squared_diffs": 5.464903225806452e-9}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "137",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.13825375182481753, "squared_diffs": 252.15592791537162},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00000837226277372263, "squared_diffs": 2.4000145985401454e-9}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06777333214285716, "squared_diffs": 144.2703114693341},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007800000000000003, "squared_diffs": 5.658800000000003e-9}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.007861, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 8
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "139",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.09095663309352521, "squared_diffs": 30.30210933763029},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009208633093525182, "squared_diffs": 3.431094964028777e-8}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07626318279569891, "squared_diffs": 24.429901728565888},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000027516129032258056, "squared_diffs": 0.000003014701225806452}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.06488125714285718, "squared_diffs": 148.59475250234942},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007617857142857138, "squared_diffs": 1.253011071428572e-8}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.1184212697841727, "squared_diffs": 337.9501364855428},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.012678, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.037497, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000013, "squared_diffs": 0}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.030045, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000003, "squared_diffs": 0}
            }
        }, "node_id": 6
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.10413221223021582, "squared_diffs": 233.47417200135445},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "93",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0636548817204301, "squared_diffs": 17.250533522585705},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007806451612903225, "squared_diffs": 2.0605161290322576e-9}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.028209, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00001, "squared_diffs": 0}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "139",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.056025323741007216, "squared_diffs": 21.078551768870426},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00001900000000000001, "squared_diffs": 0.00000113189}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.019684, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0686589857142857, "squared_diffs": 150.82025013726593},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007842857142857146, "squared_diffs": 1.1765085714285711e-8}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.012428, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000012, "squared_diffs": 0}
            }
        }, "node_id": 2
    }, {
        "stats_data": {
            "statement_ids": ["78f0b0a068bd21b9338f3ff9ac608c04"],
            "app": "$ internal-stmt-diag-poll",
            "stats": {
                "count": "280",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.07000713214285716, "squared_diffs": 160.33389857181606},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008114285714285717, "squared_diffs": 2.3176342857142876e-8}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["2c0e312e03a1f60189d401538a8501c9"],
            "app": "$ internal-expire-sessions",
            "stats": {
                "count": "278",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0841322769784173, "squared_diffs": 189.90526507601763},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["42c56dcc4a6277a6cf845353514fba1b"],
            "app": "$ internal-insert-setting",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.007106, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["e5d4ed525af22adc3ef8d5c499c1fed2"],
            "app": "$ internal-get-tables",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.048253, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.00001, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["48aba7688095051c9bc012682c580546"],
            "app": "$ internal-lease-release",
            "stats": {
                "count": "170",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.053029799999999995, "squared_diffs": 3.1140831241412004},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["9c518eeb3103bac03991cac4cc41a54e"],
            "app": "$ internal-get-job-row",
            "stats": {
                "count": "10",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.036988400000000005, "squared_diffs": 0.0113292477964},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.0000072, "squared_diffs": 1.656e-10}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["11e0b212cfcfc6524d5d2f6961927168"],
            "app": "$ internal-initializeClusterSecret",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.006148, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000005, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["60d2c10043884cb136674a449007bc52"],
            "app": "$ internal-show-version",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.009704, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000003, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["406becfb66886cd8448f5b5ea3875f46"],
            "app": "$ internal-read orphaned leases",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.009018, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000005, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["1a9ac8a7bccdae29de627d49342627a0"],
            "app": "$ internal-select-running/get-claimed-jobs",
            "stats": {
                "count": "98",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.08271802040816327, "squared_diffs": 26.89950118107196},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009612244897959183, "squared_diffs": 5.3453265306122456e-8}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
            "app": "$ internal-delete-sessions",
            "stats": {
                "count": "139",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.11414218705035971, "squared_diffs": 109.63322994154517},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009129496402877693, "squared_diffs": 7.3836690647482015e-9}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["39137de22f6e2384f29c71891ff71671"],
            "app": "$ internal-addRootToAdminRole",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.006526, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["0f83e47dd485be14b8d44ad524bad8c4"],
            "app": "$ internal-update-system-locations",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.003421, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["14e49f3600e9c058f730eb296693089e"],
            "app": "$ internal-update-system-locations",
            "stats": {
                "count": "5",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.0035320000000000004, "squared_diffs": 0.000005650193999999999},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["71a3d6d05888b6271ea3b905a246681c"],
            "app": "$ internal-read-setting",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.1955, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000005, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["0d762c0d9ac8f8f15ecd1ee649e11bd6"],
            "app": "$ internal-count-leases",
            "stats": {
                "count": "5",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0132338, "squared_diffs": 0.0006825997828000002},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007000000000000001, "squared_diffs": 7.999999999999997e-12}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["64509715caa3bf9887be6f427f118d3e"],
            "app": "$ internal-count-leases",
            "stats": {
                "count": "59",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.015697661016949152, "squared_diffs": 0.09089599926922032},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008847457627118646, "squared_diffs": 8.579627118644064e-9}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["7ebebbc9d27fdb46adfcd0552249c14a"],
            "app": "$ internal-admin-getUIData",
            "stats": {
                "count": "5",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0576462, "squared_diffs": 0.022394546870799996},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.0000088, "squared_diffs": 1.28e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["41ef3c02e91313f5f0bb248cbf96ad7a"],
            "app": "$ internal-optInToDiagnosticsStatReporting",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.01419, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000017, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["52082de22327015c1c11f6ccefe0770f"],
            "app": "$ internal-addRootUser",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.001928, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["e0852476eb22b1b6ec219e87bf8e0d17"],
            "app": "$ internal-disallowPublicUserOrRole",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.001551, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000004, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["5e08b7593b165b246cd77f412a2f050d"],
            "app": "$ internal-create-default-db",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.006312, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.001206, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["7ff4a6580666a6c106cbacd84f3f7261"],
            "app": "$ internal-create-default-db",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.004097, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000922, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["2f3812037497d01bc867325c68d77383"],
            "app": "$ internal-stmt-diag-get-all",
            "stats": {
                "count": "2",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.013152, "squared_diffs": 9.32978e-7},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.0000085, "squared_diffs": 4.500000000000004e-12}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["36541f1aedf5aa0a50bb8dd8b55f6b5b"],
            "app": "$ internal-add CREATELOGIN where a role already has CREATEROLE",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.003579, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["3a2d721e8d09eb0ad69a5d841ef95fa0"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.019832, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["f520de740e7b14c9758f697af577dfcb"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1000, "squared_diffs": 0},
                "service_lat": {"mean": 0.180246, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["3f148afe0b6a0f24fc8cc2bc3ac1b0bc"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.70707, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.012816, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["3ff75cc24da9bc91edbe2611f5c22144"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 500, "squared_diffs": 0},
                "service_lat": {"mean": 0.180166, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["8425e4f4fb0eeb1911b8c021f8a7bb3e"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "6",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.0006198333333333333, "squared_diffs": 3.428948333333334e-7},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007166666666666666, "squared_diffs": 2.8333333333333292e-12}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["4c4fa3d1f85ea10fb11eb555dbb473c7"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.6353698750000001, "squared_diffs": 3.5989005574448747},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008375, "squared_diffs": 1.9875000000000002e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["1d3779b3828c216a7ba24a464df1243e"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 1.68181, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.016165, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["316348494c2dd7388ad0c296c6032ead"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.033387, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.003024, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["68a700a7db1d58fa6dd4ad85fc89e159"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.008327, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.002293, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["708ddfda82480399414481fbdfb494a8"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.009789, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000009, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["ef60d5ec5a1d72b104d818e97a96ebce"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.26129425, "squared_diffs": 0.6469555343775},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000015375, "squared_diffs": 2.3958750000000003e-9}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["c798d669225f2fae56feb8a599779b4f"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 1.100027, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013174, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["7cdf5071f0ac85dad5162ebf3eff27bb"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.015079, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.004807, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["aec0ff619f6a54e1216657244f59ab34"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.012068, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.003415, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["ee0b847fe8f972609b352ea3f90e5270"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 50, "squared_diffs": 0},
                "service_lat": {"mean": 4.174745, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["80bbe3f3a0db7bbbce995883dc39c953"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 15, "squared_diffs": 0},
                "service_lat": {"mean": 0.087876, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["edec33f67feaaf8d589d3275b73bc405"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.07498325, "squared_diffs": 0.0067383972855000005},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008874999999999999, "squared_diffs": 2.8750000000000042e-12}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["ace70b825167b0938a365cadc01b95ff"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.01249, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["a69534607db98c7ec45f7a0b6fe0be02"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.014057, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.006479, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["82e6823214c5590f650fb3b768ce3403"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.012204, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.004234, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["77c11fe182756cf10a3e3cd4099f349f"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.006672, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["5f8c08d87da94120124dded3721b93a5"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.905989, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013614, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["318003da2a828a9db00b8a1be8d2fb82"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.000292, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["519318781305cd1a8702f0a5451b3246"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1000, "squared_diffs": 0},
                "service_lat": {"mean": 0.112736, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.013428, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["7a8b8f03cc7189f5ada040dda4085b1f"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 1.0185993750000002, "squared_diffs": 10.651306361193877},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.0000085, "squared_diffs": 1.2000000000000004e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["49c5ec8124e02f2092f6270047b86ef2"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.150592625, "squared_diffs": 0.38280942649387495},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008999999999999999, "squared_diffs": 8.199999999999999e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["ff11c2f7c872db9795b1d146e8266a32"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 6, "squared_diffs": 0},
                "service_lat": {"mean": 0.001124, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["9eb194c1aff4d8cd70a11e9efb2c5aa4"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "6",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.006265500000000001, "squared_diffs": 0.0004813619175000001},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008166666666666666, "squared_diffs": 6.833333333333337e-12}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["35768c6028bb54635cbb2bf1ae5c740a"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "8",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.15657775000000002, "squared_diffs": 0.08544764220149999},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008125, "squared_diffs": 2.4875000000000005e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["b977ee4b3a196762935d0ffaf0909d55"],
            "app": "$ cockroach demo",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 3.428286, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.05439, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["8c5672fb35f0f690bab77a63ea610380"],
            "app": "$ internal-read-zone-configs",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.012756, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["484b1d667f7877b30d7d5185c94f6cb0"],
            "app": "$ internal-poll-show-jobs",
            "stats": {
                "count": "55",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.03379730909090909, "squared_diffs": 0.10742806087374544},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.0000072, "squared_diffs": 9.679999999999998e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["566fbc00f5ce45a49c1ee7994fadcb3f"],
            "app": "$ internal-set-setting",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.00956, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["bae1f5c2a833a25d49d464776a7c3347"],
            "app": "$ internal-get-table-statistics",
            "stats": {
                "count": "12",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.04053408333333333, "squared_diffs": 0.03847655958491667},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000010083333333333332, "squared_diffs": 6.349166666666666e-10}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["f9e2db938752287210b375012785d9b6"],
            "app": "$ internal-get-jobs",
            "stats": {
                "count": "12",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.023063833333333332, "squared_diffs": 0.0011240602156666665},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006833333333333334, "squared_diffs": 2.566666666666666e-11}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["52082de22327015c1c11f6ccefe0770f"],
            "app": "$ internal-addAdminRole",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 1, "squared_diffs": 0},
                "service_lat": {"mean": 0.001791, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["c81ca81beaa4460c0672f051344b137c"],
            "app": "$ internal-copy-setting",
            "stats": {
                "count": "2",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.0030914999999999996, "squared_diffs": 1.2960500000000053e-8},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["f648758dc5421a02a388e9b5f6a4cfa0"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.512616, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000006, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["f03c075785c82381f9e7bfbdd7974c63"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.516874, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["f5dd985d38b4b72bd49da20818d63951"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 1.123457, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000008, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["75331203235f4f43f1afd9d5f847cb0e"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.728057, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000016, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["fdc86dd6fe36d449ecb0524bd3708f7f"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 1.4043860000000001, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 1
    }, {
        "stats_data": {
            "statement_ids": ["4d0fda79b2369160406fd72a69aa92c2"],
            "app": "$ internal-create-stats",
            "stats": {
                "count": "1",
                "max_retries": "0",
                "num_rows": {"mean": 0, "squared_diffs": 0},
                "service_lat": {"mean": 0.687103, "squared_diffs": 0},
                "retry_lat": {"mean": 0, "squared_diffs": 0},
                "commit_lat": {"mean": 0.000007, "squared_diffs": 0}
            }
        }, "node_id": 1
    }]
}
