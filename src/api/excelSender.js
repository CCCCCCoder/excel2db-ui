import service from "@/utils/request";

export function sendExcel(data) {
    return service.post('/api/test/test',data)
}
