import { Router } from "express"
import { ReturnReason } from "../../../.."
import { DeleteResponse } from "../../../../types/common"

const route = Router()

export default (app) => {
  app.use("/return-reasons", route)

  /**
   * List reasons
   */
  route.get("/", require("./list-reasons").default)

  /**
   * Retrieve reason
   */
  route.get("/:id", require("./get-reason").default)

  /**
   * Create a reason
   */
  route.post("/", require("./create-reason").default)

  /**
   * Update a reason
   */
  route.post("/:id", require("./update-reason").default)

  /**
   * Delete a reason
   */
  route.delete("/:id", require("./delete-reason").default)

  return app
}

export const defaultAdminReturnReasonsFields = [
  "id",
  "value",
  "label",
  "parent_return_reason_id",
  "description",
  "created_at",
  "updated_at",
  "deleted_at",
]

export const defaultAdminReturnReasonsRelations = [
  "parent_return_reason",
  "return_reason_children",
]

export type AdminReturnReasonsRes = {
  return_reason: ReturnReason
}

export type AdminReturnReasonsListRes = {
  return_reasons: ReturnReason[]
}

export type AdminReturnReasonsDeleteRes = DeleteResponse

export * from "./create-reason"
export * from "./update-reason"
